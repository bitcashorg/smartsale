import { deflateRawSync, inflateRawSync } from "node:zlib";
import { savePresaleDepositIntent } from "@/app/actions/save-deposit";
import { appConfig } from "@/lib/config";
import { createSupabaseServerClient } from "@/services/supabase";
import { insertTransaction } from "@/services/supabase/service";
import { getErrorMessage } from "@repo/errors";
import { tasks } from "@trigger.dev/sdk/v3";
import { ABI, APIClient, Action } from "@wharfkit/antelope";
import {
	type AbiProvider,
	SigningRequest,
	type SigningRequestEncodingOptions,
	type ZlibProvider,
} from "eosio-signing-request";
import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: NextRequest) {
	try {
		const request = await req.json();
		console.log("Request", request);

		const parsed = SigningRequestCallbackPayloadSchema.safeParse(request);
		if (parsed.error) {
			console.error("Invalid ESR CallbackPayload", parsed.error, parsed.data);
			throw new Error("Invalid ESR CallbackPayload");
		}

		const payload = parsed.data;
		const esr = SigningRequest.from(payload.req, esrNodeJSOptions);
		console.log("ESR callback payload", payload, esr.toJSON());

		const id = esr.getInfoKey("uuid");
		const actionName = esr.getRawActions()[0].name.toString();
		const isLogin = actionName === "login";
		const isPresale = Boolean(esr.getInfoKey("presale"));
		const abis = await esr.fetchAbis();
		const action = esr.resolveActions(abis)[0];
		const isBankTransfer = actionName === "stbtransfer";

		console.log(
			"👋 esr data input ",
			JSON.stringify({ id, action, isPresale, esr, abis, isBankTransfer }),
		);

		const supabase = await createSupabaseServerClient();
		const { data: esrUpdate, error } = await supabase
			.from("esr")
			.insert({
				id,
				code: payload.req,
				account: payload.sa,
				trx_id: payload.tx,
				created_at: new Date().toISOString(),
			})
			.select("*");

		if (error) throw new Error(`Error updating ESR entry: ${error.message}`);
		console.log("ESR entry updated successfully:", esrUpdate);

		if (isLogin) {
			const { data: session, error: sessionError } = await supabase
				.from("session")
				.insert([
					{
						id,
						tx: payload.tx,
						account: payload.sa,
						esr_code: payload.req,
					},
				])
				.select("*");

			if (sessionError)
				throw new Error(`Error creating session: ${sessionError.message}`);
			console.log("Session created successfully:", session);
		}

		if (isPresale) {
			const transaction = await insertTransaction(
				{
					hash: payload.tx,
					trx_type: "presale_deposit",
					final: false,
					chain_id: 1,
					chain_type: "eos",
				},
				supabase,
			);
			if (!transaction) throw new Error("Error creating transaction");

			const eosDeposit = {
				trxId: payload.tx,
				from: payload.sa,
				quantity: isBankTransfer
					? JSON.parse(action.data.quantity.toString()).quantity
					: action.data.quantity,
				to: action.data.to,
			};
			const result = await tasks.trigger("eos-presale-deposit", eosDeposit);
			console.info(
				`Triggered address activity event for webhook ${eosDeposit.trxId}`,
				result,
			);

			console.log("Saved transaction:", transaction);
		}

		return NextResponse.json({
			success: true,
			message: "Successfully received esr callback",
		});
	} catch (error) {
		console.error("Error handling request:", error);
		return NextResponse.json({
			success: false,
			message:
				getErrorMessage(error) ||
				"An error occurred during the request processing",
		});
	}
}

const eos = new APIClient({
	url: appConfig.eosRpc,
});
const esrNodeJSOptions: SigningRequestEncodingOptions = {
	abiProvider: {
		getAbi: async (account) => {
			const response = await eos.v1.chain.get_abi(account.toString());
			return response.abi;
		},
	} as AbiProvider,
	zlib: {
		deflateRaw: (data) => new Uint8Array(deflateRawSync(Buffer.from(data))),
		inflateRaw: (data) => new Uint8Array(inflateRawSync(Buffer.from(data))),
	} as ZlibProvider,
};

const SigningRequestCallbackPayloadSchema = z.object({
	sp: z.string(),
	req: z.string(),
	sa: z.string(),
	rid: z.string(),
	bn: z.string().optional(),
	tx: z.string(),
	sig: z.string(),
	rbn: z.string(),
	ex: z.string().optional(),
	cid: z.string().optional(),
});

const abi = ABI.from({
	version: "eosio::abi/1.0",
	types: [],
	variants: [],
	structs: [
		{
			name: "transfer",
			base: "",
			fields: [
				{ name: "from", type: "name" },
				{ name: "to", type: "name" },
				{ name: "quantity", type: "asset" },
				{ name: "memo", type: "string" },
			],
		},
	],
	actions: [],
	tables: [],
	ricardian_clauses: [],
});
