"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.issueTokens = void 0;
const smartsale_contracts_1 = require("smartsale-contracts");
const smartsale_env_1 = require("smartsale-env");
const viem_1 = require("viem");
const config_1 = require("~/config");
const viem_2 = require("viem");
async function issueTokens(to, amount) {
    console.log('issueTokens', {
        args: [to, amount],
    });
    try {
        const walletClient = (0, viem_1.createWalletClient)({
            chain: smartsale_env_1.eosEvmTestnet,
            transport: (0, viem_2.http)(),
            key: config_1.appenv.evm.issuerKey,
            account: config_1.appenv.evm.issuerAccount,
        });
        return walletClient.writeContract({
            address: smartsale_contracts_1.TestnetUSDCred.address,
            abi: smartsale_contracts_1.TestnetUSDCred.abi,
            functionName: 'issue',
            args: [to, amount],
        });
    }
    catch (error) {
        console.log(error.message);
        return null;
    }
}
exports.issueTokens = issueTokens;
//# sourceMappingURL=cred-issuer.js.map