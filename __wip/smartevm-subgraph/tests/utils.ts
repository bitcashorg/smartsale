import { Address, ethereum, BigInt, Bytes } from "@graphprotocol/graph-ts";
import {
	createMockedFunction,
	newMockEventWithParams,
} from "matchstick-as/assembly/index";

import {
	CancellationSellOrder,
	ClaimedFromOrder,
	NewAuction,
	NewSellOrder,
	NewUser,
} from "../generated/EasyAuction/EasyAuction";
import { addresses } from "./constants";

export const easyAuctionContractAddress = Address.fromString(
	addresses.get("easyAuctionContract")
);

export const auctioningTokenContractAddress = Address.fromString(
	addresses.get("auctioningTokenAddress")
);

export const biddingTokenContractAddress = Address.fromString(
	addresses.get("biddingTokenAddress")
);

export function createNewAuctionEvent(
	auctionId: i32,
	auctioningToken: string,
	biddingToken: string,
	orderCancellationEndDate: i32,
	auctionEndDate: i32,
	userId: i32,
	auctionedSellAmount: BigInt,
	minBuyAmount: BigInt,
	minimumBiddingAmountPerOrder: BigInt,
	minimumFundingThreshold: BigInt,
	allowListContract: string,
	allowListData: string
): NewAuction {
	let newAuctionEvent = changetype<NewAuction>(
		newMockEventWithParams([
			new ethereum.EventParam(
				"auctionId",
				ethereum.Value.fromI32(auctionId)
			),
			new ethereum.EventParam(
				"_auctioningToken",
				ethereum.Value.fromAddress(Address.fromString(auctioningToken))
			),
			new ethereum.EventParam(
				"_biddingToken",
				ethereum.Value.fromAddress(Address.fromString(biddingToken))
			),
			new ethereum.EventParam(
				"orderCancellationEndDate",
				ethereum.Value.fromI32(orderCancellationEndDate)
			),
			new ethereum.EventParam(
				"auctionEndDate",
				ethereum.Value.fromI32(auctionEndDate)
			),
			new ethereum.EventParam("userId", ethereum.Value.fromI32(userId)),
			new ethereum.EventParam(
				"_auctionedSellAmount",
				ethereum.Value.fromUnsignedBigInt(auctionedSellAmount)
			),
			new ethereum.EventParam(
				"_minBuyAmount",
				ethereum.Value.fromUnsignedBigInt(minBuyAmount)
			),
			new ethereum.EventParam(
				"minimumBiddingAmountPerOrder",
				ethereum.Value.fromUnsignedBigInt(minimumBiddingAmountPerOrder)
			),
			new ethereum.EventParam(
				"minimumFundingThreshold",
				ethereum.Value.fromUnsignedBigInt(minimumFundingThreshold)
			),
			new ethereum.EventParam(
				"allowListContract",
				ethereum.Value.fromAddress(
					Address.fromString(allowListContract)
				)
			),
			new ethereum.EventParam(
				"allowListData",
				ethereum.Value.fromBytes(Bytes.fromHexString(allowListData))
			),
		])
	);

	newAuctionEvent.address = easyAuctionContractAddress;

	return newAuctionEvent;
}

export function createNewUserEvent(userId: i32, userAddress: string): NewUser {
	let newUserEvent = changetype<NewUser>(
		newMockEventWithParams([
			new ethereum.EventParam("userId", ethereum.Value.fromI32(userId)),
			new ethereum.EventParam(
				"userAddress",
				ethereum.Value.fromAddress(Address.fromString(userAddress))
			),
		])
	);
	return newUserEvent;
}

export function createNewSellOrderEvent(
	auctionId: i32,
	userId: i32,
	buyAmount: BigInt,
	sellAmount: BigInt
): NewSellOrder {
	let newSellOrderEvent = changetype<NewSellOrder>(
		newMockEventWithParams([
			new ethereum.EventParam(
				"auctionId",
				ethereum.Value.fromI32(auctionId)
			),
			new ethereum.EventParam("userId", ethereum.Value.fromI32(userId)),
			new ethereum.EventParam(
				"buyAmount",
				ethereum.Value.fromUnsignedBigInt(buyAmount)
			),
			new ethereum.EventParam(
				"sellAmount",
				ethereum.Value.fromUnsignedBigInt(sellAmount)
			),
		])
	);
	return newSellOrderEvent;
}

export function createNewCancelOrderEvent(
	auctionId: i32,
	userId: i32,
	buyAmount: BigInt,
	sellAmount: BigInt
): CancellationSellOrder {
	let newCancelOrderEvent = changetype<CancellationSellOrder>(
		newMockEventWithParams([
			new ethereum.EventParam(
				"auctionId",
				ethereum.Value.fromI32(auctionId)
			),
			new ethereum.EventParam("userId", ethereum.Value.fromI32(userId)),
			new ethereum.EventParam(
				"buyAmount",
				ethereum.Value.fromUnsignedBigInt(buyAmount)
			),
			new ethereum.EventParam(
				"sellAmount",
				ethereum.Value.fromUnsignedBigInt(sellAmount)
			),
		])
	);

	return newCancelOrderEvent;
}

export function createNewClaimEvent(
	auctionId: i32,
	userId: i32,
	buyAmount: BigInt,
	sellAmount: BigInt
): ClaimedFromOrder {
	let newCancelOrderEvent = changetype<ClaimedFromOrder>(
		newMockEventWithParams([
			new ethereum.EventParam(
				"auctionId",
				ethereum.Value.fromI32(auctionId)
			),
			new ethereum.EventParam("userId", ethereum.Value.fromI32(userId)),
			new ethereum.EventParam(
				"buyAmount",
				ethereum.Value.fromUnsignedBigInt(buyAmount)
			),
			new ethereum.EventParam(
				"sellAmount",
				ethereum.Value.fromUnsignedBigInt(sellAmount)
			),
		])
	);

	return newCancelOrderEvent;
}

export function mockAuctionDataFunctionCall(
	auctionId: BigInt,
	auctioningToken: string,
	biddingToken: string,
	orderCancellationEndDate: i32,
	auctionEndDate: i32,
	initialAuctionOrder: string,
	minimumBiddingAmountPerOrder: BigInt,
	interimSumBidAmount: i32,
	interimOrder: string,
	clearingPriceOrder: string,
	volumeClearingPriceOrder: i32,
	minFundingThresholdNotReached: boolean,
	isAtomicClosureAllowed: boolean,
	feeNumberator: i32,
	minFundingThreshold: BigInt
): void {
	let argsArray: Array<ethereum.Value> = [
		ethereum.Value.fromUnsignedBigInt(auctionId),
	];

	createMockedFunction(
		easyAuctionContractAddress,
		"auctionData",
		"auctionData(uint256):(address,address,uint256,uint256,bytes32,uint256,uint256,bytes32,bytes32,uint96,bool,bool,uint256,uint256)"
	)
		.withArgs(argsArray)
		.returns([
			ethereum.Value.fromAddress(Address.fromString(auctioningToken)),
			ethereum.Value.fromAddress(Address.fromString(biddingToken)),
			ethereum.Value.fromI32(orderCancellationEndDate),
			ethereum.Value.fromI32(auctionEndDate),
			ethereum.Value.fromBytes(Bytes.fromHexString(initialAuctionOrder)),
			ethereum.Value.fromUnsignedBigInt(minimumBiddingAmountPerOrder),
			ethereum.Value.fromI32(interimSumBidAmount),
			ethereum.Value.fromBytes(Bytes.fromHexString(interimOrder)),
			ethereum.Value.fromBytes(Bytes.fromHexString(clearingPriceOrder)),
			ethereum.Value.fromI32(volumeClearingPriceOrder),
			ethereum.Value.fromBoolean(minFundingThresholdNotReached),
			ethereum.Value.fromBoolean(isAtomicClosureAllowed),
			ethereum.Value.fromI32(feeNumberator),
			ethereum.Value.fromUnsignedBigInt(minFundingThreshold),
		]);
}

export function mockTokenSymbol(tokenAddress: Address, symbol: string): void {
	createMockedFunction(tokenAddress, "symbol", "symbol():(string)").returns([
		ethereum.Value.fromString(symbol),
	]);
}

export function mockTokenDecimals(tokenAddress: Address, decimals: i32): void {
	createMockedFunction(
		tokenAddress,
		"decimals",
		"decimals():(uint8)"
	).returns([ethereum.Value.fromI32(decimals)]);
}
