"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listenToEosTransfers = void 0;
const smartsale_env_1 = require("smartsale-env");
const utils_1 = require("viem/utils");
const dfuse_client_1 = require("./dfuse-client");
const cred_issuer_1 = require("./cred-issuer");
// https://docs.dfuse.eosnation.io/platform/public-apis/search-query-language/
// https://docs.dfuse.eosnation.io/eosio/public-apis/reference/search/terms/
// receiver: means the account with code that has executed the action.
async function listenToEosTransfers(env = 'test') {
    const usdt = smartsale_env_1.smartsaleEnv[env].usdt.find((t) => (t.chainType = 'antelope'))?.address;
    const bank = smartsale_env_1.smartsaleEnv[env].bitcash.bank;
    const launchpad = smartsale_env_1.smartsaleEnv[env].smartsale.bk;
    const usdtDeposits = await (0, dfuse_client_1.createFirehoseSubscription)(`receiver:${bank} action:stbtransfer data.to:${launchpad}`);
    const bitusdDeposits = await (0, dfuse_client_1.createFirehoseSubscription)(`receiver:${usdt} action:transfer data.to:${launchpad}`);
    // only first action for now
    usdtDeposits.on('data', ({ trxId, actions }) => handleDeposit({ trxId, from: actions[0].from, quantity: actions[0].quantity }));
    bitusdDeposits.on('data', ({ trxId, actions }) => handleDeposit({ trxId, from: actions[0].from, quantity: actions[0].quantity.quantity }));
}
exports.listenToEosTransfers = listenToEosTransfers;
async function handleDeposit(data) {
    console.log('handle deposit', data);
    const response = await (0, cred_issuer_1.issueTokens)('0x7472312e4e1a373df751f84bd871a4c7a16128fa', BigInt(data.quantity));
    console.log('tokens issued', (0, utils_1.stringify)(response));
}
//# sourceMappingURL=eos-transfers.js.map