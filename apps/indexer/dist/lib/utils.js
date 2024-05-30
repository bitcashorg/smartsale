"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToBigIntWithDecimals = exports.getEvents = exports.bigintToPostgresTimestamp = exports.getTokenDetails = exports.runPromisesInSeries = exports.writeToFile = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const abis_1 = require("abitype/abis");
const evm_client_1 = require("./evm-client");
const viem_1 = require("viem");
async function writeToFile(data, filePath) {
    try {
        // Write the data to the specified file
        // If the file does not exist, it will be created.
        await promises_1.default.writeFile(filePath, data, 'utf8');
        console.log('Logs have been written to the file successfully.');
    }
    catch (error) {
        console.error('Error writing logs to file:', error);
    }
}
exports.writeToFile = writeToFile;
function runPromisesInSeries(promiseFns, delay) {
    // Start with a Promise<void> to ensure compatibility with the accumulator's type
    return promiseFns.reduce((prevPromise, currentPromiseFn) => {
        // Chain the current promise to the accumulator after the previous one completes
        // Here, we ignore the result of the previous promise, as we're focusing on chaining
        return prevPromise.then(() => {
            if (delay) {
                // Introduce a delay before executing the current promise
                return new Promise((resolve) => {
                    setTimeout(() => resolve(), delay);
                }).then(() => currentPromiseFn());
            }
            else {
                // If no delay is provided, execute the current promise immediately
                return currentPromiseFn();
            }
        });
    }, Promise.resolve());
}
exports.runPromisesInSeries = runPromisesInSeries;
async function getTokenDetails({ address }) {
    const results = await evm_client_1.client.multicall({
        contracts: [
            {
                address,
                abi: abis_1.erc20Abi,
                functionName: 'decimals',
                args: [],
            },
            {
                address,
                abi: abis_1.erc20Abi,
                functionName: 'symbol',
                args: [],
            },
        ],
        multicallAddress: '0xcA11bde05977b3631167028862bE2a173976CA11',
    });
    return { address, decimals: Number(results[0].result), symbol: String(results[1].result) };
}
exports.getTokenDetails = getTokenDetails;
function bigintToPostgresTimestamp(timestamp) {
    const date = new Date(Number(timestamp) * 1000); // Convert seconds to milliseconds
    return date.toISOString();
}
exports.bigintToPostgresTimestamp = bigintToPostgresTimestamp;
const getEvents = (abi) => abi.filter((item) => item.type === 'event');
exports.getEvents = getEvents;
function convertToBigIntWithDecimals(quantity) {
    // Extract the numeric value as a string
    const [numericValue] = quantity.split(' ');
    // Always use 6 decimals in parseUnits
    return (0, viem_1.parseUnits)(numericValue, 6);
}
exports.convertToBigIntWithDecimals = convertToBigIntWithDecimals;
//# sourceMappingURL=utils.js.map