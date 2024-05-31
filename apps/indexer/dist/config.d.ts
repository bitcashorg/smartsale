export declare const appenv: {
    chains: Map<number, import("viem").Chain>;
    issuer: {
        eos: string;
        evm: `0x${string}`;
    };
    bitcash: {
        bank: string;
        token: string;
        accounts: string;
    };
    smartsale: {
        auction: `0x${string}`;
        bk: string;
    };
    usdt: import("smartsale-contracts").TokenContractData[];
    esrCallbackUrl: string;
    supabase: {
        url: string;
        anonKey: string;
    };
    sentry: {
        dsn: string;
    };
    eos: {
        dfuseKey: string;
    };
    evm: {
        eosApi: string;
        sepoliaApi: string;
        issuerKey: string;
        issuerAddress: `0x${string}`;
        issuerAccount: import("viem").PrivateKeyAccount;
    };
};
//# sourceMappingURL=config.d.ts.map