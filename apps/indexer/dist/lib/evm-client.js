"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentBlockHeight = exports.sepoliaClient = exports.walletClient = exports.client = void 0;
const viem_1 = require("viem");
const chains_1 = require("viem/chains");
const config_1 = require("../config");
const smartsale_env_1 = require("smartsale-env");
exports.client = (0, viem_1.createPublicClient)({
    chain: smartsale_env_1.eosEvmTestnet,
    transport: (0, viem_1.http)(),
});
exports.walletClient = (0, viem_1.createWalletClient)({
    chain: smartsale_env_1.eosEvmTestnet,
    transport: (0, viem_1.http)(),
    key: config_1.appenv.evm.issuerKey,
    account: config_1.appenv.evm.issuerAccount,
});
exports.sepoliaClient = (0, viem_1.createPublicClient)({
    chain: {
        ...chains_1.sepolia,
        rpcUrls: {
            default: {
                http: [config_1.appenv.evm.sepoliaApi],
            },
        },
    },
    transport: (0, viem_1.http)(),
});
async function getCurrentBlockHeight() {
    try {
        const blockNumber = await exports.client.getBlockNumber();
        return blockNumber;
    }
    catch (error) {
        console.error('Failed to fetch current block height:', error);
        throw error; // Rethrow the error for handling upstream
    }
}
exports.getCurrentBlockHeight = getCurrentBlockHeight;
//# sourceMappingURL=evm-client.js.map