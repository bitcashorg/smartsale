import { BigInt } from "@graphprotocol/graph-ts";
import { NewAuction } from "../generated/EasyAuction/EasyAuction";
import { TOKENS, addresses, dates, encodedOrders } from "./constants";
import {
	auctioningTokenContractAddress,
	biddingTokenContractAddress,
	createNewAuctionEvent,
	mockAuctionDataFunctionCall,
	mockTokenDecimals,
	mockTokenSymbol,
} from "./utils";

// Set up an initial auction with the following details
// Auction ID: 1
// Auctioning Token Address:
// Auctioning Token Symbol: AUT
// Auctioning Token: 1
// Bidding Token Address:
// Bidding Token Symbol: BDT
// Bidding Token: 100
// Auctioning Amount: 1
// Minimum Bid Amount: 1
// Order Cancellation End Date: 0
// Auction End Date: 0
// IsAtomic: false
export function setupAuction1(mockContractCalls: boolean = true): NewAuction {
	// Create a new auction event
	let newAuctionEvent = createNewAuctionEvent(
		0x1,
		addresses.get("auctioningTokenAddress"),
		addresses.get("biddingTokenAddress"),
		dates.get("orderCancellationEndDate1"),
		dates.get("auctionEndDate1"),
		0x1,
		TOKENS.get("1000"),
		TOKENS.get("2000"),
		TOKENS.get("1"),
		TOKENS.get("100"),
		addresses.get("zeroAddress"),
		"0x"
	);

	if (mockContractCalls) {
		mockAuctionContractCalls();
	}

	return newAuctionEvent;
}

export function mockAuctionContractCalls(
	isAtomicClosureAllowed: boolean = false,
	biddingTokenDecimals: i32 = 18,
	auctioningTokenDecimals: i32 = 18
): void {
	// Mock function calls which the handleAuction handler will make to the auction/token contracts
	mockAuctionDataFunctionCall(
		BigInt.fromString("1"),
		addresses.get("auctioningTokenAddress"),
		addresses.get("biddingTokenAddress"),
		dates.get("orderCancellationEndDate1"),
		dates.get("auctionEndDate1"),
		encodedOrders.get("initialAuctionOrder1"),
		TOKENS.get("1"),
		0,
		encodedOrders.get("startingOrder"),
		encodedOrders.get("zeroOrder"),
		0,
		false,
		isAtomicClosureAllowed,
		0,
		TOKENS.get("100")
	);

	mockTokenSymbol(auctioningTokenContractAddress, "AUT");
	mockTokenDecimals(auctioningTokenContractAddress, biddingTokenDecimals);

	mockTokenSymbol(biddingTokenContractAddress, "BDT");
	mockTokenDecimals(biddingTokenContractAddress, auctioningTokenDecimals);
}
