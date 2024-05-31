"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listenToEvmTransfers = void 0;
const smartsale_contracts_1 = require("smartsale-contracts");
const utils_1 = require("~/lib/utils");
const viem_1 = require("viem");
const chains_1 = require("viem/chains");
const smartsale_env_1 = require("smartsale-env");
const tokens = [smartsale_contracts_1.SepoliaUSDT, smartsale_contracts_1.TestnetUSDT];
async function listenToEvmTransfers() {
    console.log('subscribing to evm usdt transfers ...');
    tokens.map(listenToEvmTransfersFn);
}
exports.listenToEvmTransfers = listenToEvmTransfers;
async function listenToEvmTransfersFn(token) {
    const chain = smartsale_env_1.smartsaleChains.test.get(token.chainId);
    if (!chain)
        return;
    console.log(`listening usdt transfers for token ${token.symbol} on chain ${chain.name}`);
    const client = (0, viem_1.createPublicClient)({
        chain,
        transport: (0, viem_1.http)(),
    });
    try {
        const logs = await client.getLogs({
            address: token.address,
            event: (0, viem_1.parseAbiItem)('event Transfer(address indexed from, address indexed to, uint256 value)'),
            args: {
                to: '0x2C9DAAb3F463d6c6D248aCbeaAEe98687936374a',
            },
            fromBlock: BigInt(token.indexFromBlock),
        });
        // delay prevents idempotent transactions:
        processLogs(logs, 3000);
        // Watch for new event logs
        client.watchEvent({
            address: token.address,
            event: (0, viem_1.parseAbiItem)('event Transfer(address indexed from, address indexed to, uint256 value)'),
            args: {
                to: '0x2C9DAAb3F463d6c6D248aCbeaAEe98687936374a',
            },
            onLogs: (logs) => {
                console.log('real time transfer', (0, viem_1.stringify)(logs, null, 2));
                processLogs(logs);
            },
        });
    }
    catch (error) {
        console.error(error);
    }
}
// takes the generic logs and if the eventName matches one of the eventHandlers keys
// it passes the log to corresponding hanlder function
async function processLogs(logs, delay = 0) {
    const actions = logs
        .map((log) => {
        const eventName = log.eventName.toString();
        if (!(eventName in eventHandlers))
            return null;
        return async () => {
            try {
                eventHandlers[eventName] && eventHandlers[eventName](log);
            }
            catch (error) {
                //TODO: sent sentry reports
                console.error(error);
            }
        };
    })
        .filter((action) => action !== null);
    (0, utils_1.runPromisesInSeries)(actions, delay);
}
const eventHandlers = {
    Transfer: handleTransfer,
};
async function handleTransfer(log) {
    const data = {
        trx_hash: log.transactionHash,
        from: log.args.from,
        to: log.args.to,
        amount: log.args.value,
        token: log.address,
        chain_id: chains_1.sepolia.id,
        type: 'deposit',
    };
    // const result = await db.transfers.upsert({
    //   where: {
    //     trx_hash: log.transactionHash!,
    //   },
    //   update: data,
    //   create: data,
    // })
    // console.log('result', result)
    // if (result.usdcred_trx || data.from === '0x0000000000000000000000000000000000000000') return
    // const usdcred_trx = (await issueTokens(data.from, data.amount)) as Address
    // if (!usdcred_trx) return
    // await db.transfers.update({
    //   where: {
    //     trx_hash: log.transactionHash!,
    //   },
    //   data: { usdcred_trx },
    // })
    // console.log('tokens issued', { usdcred_trx, trx: log.transactionHash })
}
//# sourceMappingURL=evm-transfers.js.map