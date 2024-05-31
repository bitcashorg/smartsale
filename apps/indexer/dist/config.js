"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appenv = void 0;
const accounts_1 = require("viem/accounts");
const smartsale_env_1 = require("smartsale-env");
exports.appenv = {
    sentry: {
        dsn: process.env.SENTRY_DSN || '',
    },
    eos: {
        dfuseKey: process.env.DFUSE_API_KEY || '',
    },
    evm: {
        eosApi: 'https://api.testnet.evm.eosnetwork.com',
        sepoliaApi: process.env.SEPOLIA_RPC || '',
        issuerKey: process.env.ISSUER_KEY || '',
        issuerAddress: (process.env.ISSUER_ADDRESS || ''),
        issuerAccount: (0, accounts_1.privateKeyToAccount)(`0x${process.env.ISSUER_KEY}`),
    },
    ...smartsale_env_1.smartsaleEnv.test,
};
//# sourceMappingURL=config.js.map