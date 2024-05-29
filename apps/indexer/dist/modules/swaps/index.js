"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startSwapsService = void 0;
const eos_transfers_1 = require("./eos-transfers");
const evm_transfers_1 = require("./evm-transfers");
function startSwapsService() {
    (0, eos_transfers_1.listenToEosTransfers)();
    (0, evm_transfers_1.listenToEvmTransfers)();
}
exports.startSwapsService = startSwapsService;
//# sourceMappingURL=index.js.map