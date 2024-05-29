"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startExpress = void 0;
const express_1 = __importDefault(require("express"));
const evm_client_1 = require("../lib/evm-client");
function startExpress() {
    const app = (0, express_1.default)();
    const port = 8080;
    app.get('/', async (_req, res) => {
        try {
            // TODO: respond with last indexed block
            const blockHeight = await (0, evm_client_1.getCurrentBlockHeight)();
            res.send(`Current Block Height: ${blockHeight}`);
        }
        catch (error) {
            res.status(500).send('Failed to fetch current block height');
        }
    });
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}
exports.startExpress = startExpress;
//# sourceMappingURL=healthcheck.js.map