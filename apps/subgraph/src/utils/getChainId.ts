function getChainHexFromName(chainName: string): string {
	if (chainName.includes("goerli")) {
		return "0x05";
	} else if (chainName.includes("mainnet")) {
		return "0x01";
	} else if (chainName.includes("matic")) {
		return "0x89";
	} else if (chainName.includes("gnosis")) {
		return "0x64";
	} else if (chainName.includes("mumbai")) {
		return "0x13881";
	} else if (chainName.includes("avalanche")) {
		return "0xa86a";
	} else if (chainName.includes("fuji")) {
		return "0xa869"
	} else if (chainName.includes("bsc")) {
		return "0x38";
	} else if (chainName.includes("bsc-testnet")) {
		return "0x61";
	}
	return "0x01";
}

function getChainIdFromName(chainName: string): i32 {
    if (chainName.includes("goerli")) {
		return 5;
	} else if (chainName.includes("mainnet")) {
		return 1;
	} else if (chainName.includes("matic")) {
		return 132;
	} else if (chainName.includes("gnosis")) {
		return 100;
	} else if (chainName.includes("mumbai")) {
		return 80001;
	} else if (chainName.includes("avalanche")) {
		return 43114;
	} else if (chainName.includes("fuji")) {
		return 43113;
	} else if (chainName.includes("bsc")) {
		return 56;
	} else if (chainName.includes("bsc-testnet")) {
		return 97;
	}
	return 1;
}

export { getChainHexFromName, getChainIdFromName };