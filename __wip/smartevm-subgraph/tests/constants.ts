import { BigInt } from "@graphprotocol/graph-ts";

/**Addresses
 * type: string
 */
export const addresses: Map<string, string> = new Map();
addresses.set("zeroAddress", "0x0000000000000000000000000000000000000000");
addresses.set("userAddress1", "0x5eA1474CeFA1ea5986327F97932B587deD802CF7");
addresses.set("userAddress2", "0xf3dBd9F4C902c7183E0fd22bFdbAF5ed330845c4");
addresses.set("auctioningTokenAddress", "0x3b2a7fA9CEb3732D4B853c522490f0Cd2ACd4509");
addresses.set("biddingTokenAddress", "0x3F53802E6b65455305c3f9412C8C9118B2E86d49");
addresses.set("easyAuctionContract", "0x0b7fFc1f4AD541A4Ed16b40D8c37f0929158D101");
/** End of Addresses */

/**Timestamps
 * type: i32
 */
// Wednesday, May 3, 2023
export const dates: Map<string, i32> = new Map();
dates.set("orderCancellationEndDate1", 1683094249)
dates.set("auctionEndDate1", 1683104249)
/** End of timestamps */

/**Encoded Orders
 * type: string
 */
export const encodedOrders: Map<string, string> = new Map();

/**
 * userId: 11
 * buyAmount: 100 * 10^18
 * sellAmount: 3420 * 10^18
 */
encodedOrders.set("initialAuctionOrder1", "0x000000000000000b000000056bc75e2d63100000000000b96608c8103bf00000")

/**
 * userId: 0
 * buyAmount: 0
 * sellAmount: 1
 */
encodedOrders.set("startingOrder", "0x0000000000000000000000000000000000000000000000000000000000000001")

/**
 * userId: 0
 * buyAmount: 0
 * sellAmount: 0
 */
encodedOrders.set("zeroOrder", "0x0000000000000000000000000000000000000000000000000000000000000000")
/** End of Encoded Orders */

/**Token(Sell/Buy/MinAmount/FundingThreshold) Amounts
 * type: Mapping<amountName: string, amount: BigInt>
 */

export let TOKENS: Map<string, BigInt> = new Map();

TOKENS.set("1", BigInt.fromString("10000000000000000000"));
TOKENS.set("100", BigInt.fromString("100000000000000000000"));
TOKENS.set("1000", BigInt.fromString("1000000000000000000000"));
TOKENS.set("2000", BigInt.fromString("2000000000000000000000"));

/** End of Token Amounts */

/** String constants
 * type: string
 */
export const entityTypes: Map<string, string> = new Map();
entityTypes.set("AuctionDetail", "AuctionDetail");
entityTypes.set("User", "User");
entityTypes.set("Order", "Order");

export const tokenSymbols: Map<string, string> = new Map();
tokenSymbols.set("AUT", "AUT");
tokenSymbols.set("BDT", "BDT");