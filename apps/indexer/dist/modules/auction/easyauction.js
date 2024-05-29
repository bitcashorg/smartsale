"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.easyAuction = void 0;
const viem_1 = require("viem");
const evm_client_1 = require("../../lib/evm-client");
const smartsale_contracts_1 = require("smartsale-contracts");
exports.easyAuction = (0, viem_1.getContract)({
    ...smartsale_contracts_1.TestnetEasyAuction,
    client: {
        public: evm_client_1.client,
    },
});
//# sourceMappingURL=easyauction.js.map