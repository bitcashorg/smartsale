"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFirehoseSubscription = exports.dfuse = void 0;
const client_1 = require("@dfuse/client");
const config_1 = require("~/config");
const node_fetch_1 = __importDefault(require("node-fetch"));
const ws_1 = __importDefault(require("ws"));
const events_1 = __importDefault(require("events"));
exports.dfuse = (0, client_1.createDfuseClient)({
    apiKey: config_1.appenv.eos.dfuseKey,
    network: 'eos.dfuse.eosnation.io',
    // authentication: true,
    httpClientOptions: {
        fetch: node_fetch_1.default,
    },
    graphqlStreamClientOptions: {
        socketOptions: {
            // @ts-ignore
            webSocketFactory: (url) => webSocketFactory(url, ['graphql-ws']),
        },
    },
    streamClientOptions: {
        socketOptions: {
            // @ts-ignore
            webSocketFactory,
        },
    },
});
async function createFirehoseSubscription(query) {
    const eventEmitter = new events_1.default();
    console.log('createFirehoseSubscription query:', query);
    const streamTransfers = `subscription {
    searchTransactionsForward(query: "${query}") {
      undo cursor
      trace {
        id
        matchingActions {
          json
        }
      }
    }
  }`;
    const stream = await exports.dfuse.graphql(streamTransfers, (message) => {
        if (message.type === 'data') {
            const transfer = message.data.searchTransactionsForward.trace;
            const data = {
                trxId: transfer.id,
                actions: transfer.matchingActions.map(({ json }) => json),
            };
            eventEmitter.emit('data', data);
            console.log('Token Transfer:', JSON.stringify(data));
        }
        if (message.type === 'error') {
            console.error('An error occurred:', message.errors, message.terminal);
        }
        if (message.type === 'complete') {
            console.log('Stream completed');
        }
    });
    return { on: eventEmitter.on, stream };
}
exports.createFirehoseSubscription = createFirehoseSubscription;
async function webSocketFactory(url, protocols = []) {
    const webSocket = new ws_1.default(url, protocols, {
        handshakeTimeout: 30 * 1000, // 30s
        maxPayload: 100 * 1024 * 100, // 100Mb
    });
    const onUpgrade = (response) => {
        // Removing the listener at this point since this factory
        // is called at each reconnection with the remote endpoint!
        webSocket.removeListener('upgrade', onUpgrade);
    };
    webSocket.on('upgrade', onUpgrade);
    // @ts-ignore
    return webSocket;
}
// necessary for dfuse client to work
;
global.fetch = node_fetch_1.default;
global.WebSocket = ws_1.default;
//# sourceMappingURL=dfuse-client.js.map