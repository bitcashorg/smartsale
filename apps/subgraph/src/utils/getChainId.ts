const chainHexMap: { [chainName: string]: string } = {
    "goerli": "0x05",
    "mainnet": "0x01",
    "matic": "0x89",
    "gnosis": "0x64",
    "mumbai": "0x13881",
    "avalanche": "0xa86a",
    "fuji": "0xa869",
    "bsc": "0x38",
    "bsc-testnet": "0x61",
		"eosevm_testnet": "0x15557",
};

const chainIdMap: { [chainName: string]: number } = {
    "goerli": 5,
    "mainnet": 1,
    "matic": 132,
    "gnosis": 100,
    "mumbai": 80001,
    "avalanche": 43114,
    "fuji": 43113,
    "bsc": 56,
    "bsc-testnet": 97,
		"eosevm_testnet": 15557,
};

function getChainHexFromName(chainName: string): string {
    return chainHexMap[chainName] || chainHexMap["mainnet"];
}

function getChainIdFromName(chainName: string): number {
    return chainIdMap[chainName] || chainIdMap["mainnet"];
}

export { getChainHexFromName, getChainIdFromName };


