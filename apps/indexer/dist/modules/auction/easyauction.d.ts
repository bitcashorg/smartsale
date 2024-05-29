export declare const easyAuction: {
    read: {
        [x: string]: (...parameters: [options?: {
            value?: bigint | undefined;
            blockNumber?: bigint | undefined;
            account?: `0x${string}` | import("viem").Account | undefined;
            blockTag?: import("viem").BlockTag | undefined;
            stateOverride?: import("viem").StateOverride | undefined;
        } | undefined] | [args: readonly unknown[], options?: {
            value?: bigint | undefined;
            blockNumber?: bigint | undefined;
            account?: `0x${string}` | import("viem").Account | undefined;
            blockTag?: import("viem").BlockTag | undefined;
            stateOverride?: import("viem").StateOverride | undefined;
        } | undefined]) => Promise<unknown>;
    };
    estimateGas: {
        [x: string]: (...parameters: [options: import("viem/chains").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<import("viem").Abi, string, readonly unknown[], import("viem").Chain | undefined>, "address" | "abi" | "args" | "functionName">>] | [args: readonly unknown[], options: import("viem/chains").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<import("viem").Abi, string, readonly unknown[], import("viem").Chain | undefined>, "address" | "abi" | "args" | "functionName">>]) => Promise<bigint>;
    };
    simulate: {
        [x: string]: <TChainOverride extends import("viem").Chain | undefined = undefined, TAccountOverride extends `0x${string}` | import("viem").Account | undefined = undefined>(...parameters: [options?: Omit<import("viem").SimulateContractParameters<import("viem").Abi, string, readonly unknown[], import("viem").Chain | undefined, TChainOverride, TAccountOverride>, "address" | "abi" | "args" | "functionName"> | undefined] | [args: readonly unknown[], options?: Omit<import("viem").SimulateContractParameters<import("viem").Abi, string, readonly unknown[], import("viem").Chain | undefined, TChainOverride, TAccountOverride>, "address" | "abi" | "args" | "functionName"> | undefined]) => Promise<import("viem").SimulateContractReturnType>;
    };
    createEventFilter: {
        [x: string]: <TStrict extends boolean | undefined = undefined>(...parameters: [options?: ({
            fromBlock?: bigint | import("viem").BlockTag | undefined;
            toBlock?: bigint | import("viem").BlockTag | undefined;
        } & {
            strict?: TStrict | undefined;
        }) | undefined] | [args: readonly unknown[] | {
            [x: string]: unknown;
            address?: undefined;
            abi?: undefined;
            eventName?: undefined;
            fromBlock?: undefined;
            strict?: undefined;
            toBlock?: undefined;
            args?: undefined;
        }, options?: ({
            fromBlock?: bigint | import("viem").BlockTag | undefined;
            toBlock?: bigint | import("viem").BlockTag | undefined;
        } & {
            strict?: TStrict | undefined;
        }) | undefined]) => Promise<import("viem").CreateContractEventFilterReturnType>;
    };
    getEvents: {
        [x: string]: (...parameters: [options?: {
            blockHash?: `0x${string}` | undefined;
            strict?: boolean | undefined;
            fromBlock?: bigint | import("viem").BlockTag | undefined;
            toBlock?: bigint | import("viem").BlockTag | undefined;
        } | undefined] | [args?: readonly unknown[] | {
            [x: string]: unknown;
            address?: undefined;
            abi?: undefined;
            args?: undefined;
            eventName?: undefined;
            fromBlock?: undefined;
            onError?: undefined;
            onLogs?: undefined;
            strict?: undefined;
            poll?: undefined;
            batch?: undefined;
            pollingInterval?: undefined;
        } | undefined, options?: {
            blockHash?: `0x${string}` | undefined;
            strict?: boolean | undefined;
            fromBlock?: bigint | import("viem").BlockTag | undefined;
            toBlock?: bigint | import("viem").BlockTag | undefined;
        } | undefined]) => Promise<import("viem").GetContractEventsReturnType<import("viem").Abi, string>>;
    };
    watchEvent: {
        [x: string]: (...parameters: [options?: {
            batch?: boolean | undefined;
            pollingInterval?: number | undefined;
            strict?: boolean | undefined;
            fromBlock?: bigint | undefined;
            onError?: ((error: Error) => void) | undefined;
            onLogs: import("viem").WatchContractEventOnLogsFn<import("viem").Abi, string, undefined>;
            poll?: true | undefined;
        } | undefined] | [args: readonly unknown[] | {
            [x: string]: unknown;
            address?: undefined;
            abi?: undefined;
            args?: undefined;
            eventName?: undefined;
            fromBlock?: undefined;
            onError?: undefined;
            onLogs?: undefined;
            strict?: undefined;
            poll?: undefined;
            batch?: undefined;
            pollingInterval?: undefined;
        }, options?: {
            batch?: boolean | undefined;
            pollingInterval?: number | undefined;
            strict?: boolean | undefined;
            fromBlock?: bigint | undefined;
            onError?: ((error: Error) => void) | undefined;
            onLogs: import("viem").WatchContractEventOnLogsFn<import("viem").Abi, string, undefined>;
            poll?: true | undefined;
        } | undefined]) => import("viem").WatchContractEventReturnType;
    };
    address: `0x${string}`;
    abi: import("viem").Abi;
};
//# sourceMappingURL=easyauction.d.ts.map