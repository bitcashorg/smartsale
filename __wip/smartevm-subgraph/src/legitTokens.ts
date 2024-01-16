export class LegitTokens {
	chainId: i32;
	tokenAddressList: string[];

	constructor(chainId: i32, tokenAddressList: string[]) {
		this.chainId = chainId;
		this.tokenAddressList = tokenAddressList;
	}
}

export let legitTokens: Map<i32, LegitTokens> = new Map();
legitTokens.set(
	1,
	new LegitTokens(1, [
		"0x6b175474e89094c44da98b954eedeac495271d0f",
		"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
		"0xdac17f958d2ee523a2206206994597c13d831ec7",
	])
);
legitTokens.set(
	4,
	new LegitTokens(4, [
		"0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea",
		"0x4dbcdf9b62e891a7cec5a2568c3f4faf9e8abe2b",
	])
);
legitTokens.set(
	5,
	new LegitTokens(5, [
		"0xdc31ee1784292379fbb2964b3b9c4124d8f89c60",
		"0x07865c6e87b9f70255377e024ace6630c1eaa37f",
	])
);
legitTokens.set(
	100,
	new LegitTokens(100, ["0xe91d153e0b41518a2ce8dd3d7944fa863463a97d"])
);
legitTokens.set(
	137,
	new LegitTokens(137, [
		"0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
		"0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
	])
);

export function getTokenList(index: i32): LegitTokens | null {
    if (legitTokens.has(index)) {
        return legitTokens.get(index);
    }
    return null;
}