"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smartsale_lib_1 = require("smartsale-lib");
const auction_1 = require("./modules/auction");
const swaps_1 = require("./modules/swaps");
const healthcheck_1 = require("./routes/healthcheck");
async function main() {
    console.log(`Launchpad indexer starting up ...`);
    try {
        (0, healthcheck_1.startExpress)();
        (0, auction_1.startAuctionIndexer)();
        (0, swaps_1.startSwapsService)();
    }
    catch (error) {
        console.log('ERROR:' + (0, smartsale_lib_1.getErrorMessage)(error), JSON.stringify(error));
    }
}
main();
//# sourceMappingURL=index.js.map