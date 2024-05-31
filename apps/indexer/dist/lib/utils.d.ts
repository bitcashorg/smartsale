import { Abi, Address } from 'viem';
export declare function writeToFile(data: string, filePath: string): Promise<void>;
export declare function runPromisesInSeries<T>(promiseFns: (() => Promise<T>)[], delay?: number): Promise<T | void>;
export declare function getTokenDetails({ address }: {
    address: Address;
}): Promise<{
    address: `0x${string}`;
    decimals: number;
    symbol: string;
}>;
export declare function bigintToPostgresTimestamp(timestamp: bigint): string;
export declare const getEvents: (abi: Abi) => (import("abitype").AbiConstructor | import("abitype").AbiError | import("viem").AbiEvent | import("abitype").AbiFallback | import("viem").AbiFunction | import("abitype").AbiReceive)[];
export declare function convertToBigIntWithDecimals(quantity: string): BigInt;
//# sourceMappingURL=utils.d.ts.map