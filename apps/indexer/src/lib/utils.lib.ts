export const printBlock = (blockId: string, blockNum: number): string =>
  `${blockId.slice(0, 8)}...${blockId.slice(-8)} (${blockNum})`
