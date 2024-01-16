import {
	afterEach,
	assert,
	clearStore,
	describe,
	log,
	logStore,
	test,
} from "matchstick-as/assembly/index";
import { BigInt, Bytes } from "@graphprotocol/graph-ts";

import {
	createNewAuctionEvent,
	auctioningTokenContractAddress,
	biddingTokenContractAddress,
	mockAuctionDataFunctionCall,
	mockTokenSymbol,
	mockTokenDecimals,
	createNewUserEvent,
	createNewSellOrderEvent,
	createNewCancelOrderEvent,
	createNewClaimEvent,
} from "./utils";
import {
	handleCancellationSellOrder,
	handleClaimedFromOrder,
	handleNewAuction,
	handleNewSellOrder,
	handleNewUser,
} from "../src/mapping";
import {
	entityTypes,
	TOKENS,
	encodedOrders,
	addresses,
	dates,
} from "./constants";
import { AuctionDetail, User } from "../generated/schema";
import { setupAuction1 } from "./test-setup";

describe("Can call mappings with custom events", () => {
	afterEach(() => {
		clearStore();
	});
	test("Can call handleNewUser with a custom NewUser event", () => {
		// Create a new user event
		let newUserEvent = createNewUserEvent(
			0x1,
			addresses.get("userAddress1")
		);

		// Add the user to the entity store by passing it to the handleNewUser handler
		handleNewUser(newUserEvent);

		// Assert that the user was added to the entity store
		assert.fieldEquals(entityTypes.get("User"), "1", "id", "1");
		log.success("handleNewUser adds user to the store", []);
	});

	test("Can call handleNewAuction with a custom NewAuction event", () => {
		// Add a user to the store
		let user = new User("1");
		user.address = Bytes.fromHexString(addresses.get("userAddress1"));
		user.auctions = new Array();
		user.save();

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
			false,
			0,
			TOKENS.get("100")
		);

		mockTokenSymbol(auctioningTokenContractAddress, "AUT");
		mockTokenDecimals(auctioningTokenContractAddress, 18);

		mockTokenSymbol(biddingTokenContractAddress, "BDT");
		mockTokenDecimals(biddingTokenContractAddress, 18);

		// Add the auction to the entity store by passing it to the handleNewAuction handler
		handleNewAuction(newAuctionEvent);

		// Assertions
		assert.entityCount(entityTypes.get("AuctionDetail"), 1);
		log.success("Assert entity count", []);

		assert.fieldEquals(
			entityTypes.get("AuctionDetail"),
			"1",
			"exactOrder",
			"1-1000000000000000000000-2000000000000000000000-1"
		);
		log.success(
			"handleNewAuction adds a New Auction Detail entry to the store",
			[]
		);
	});

	test("Can call handleNewSellOrder and check if order is added to AuctionDetail order list", () => {
		// Add user 1 to the store
		let user = new User("1");
		user.address = Bytes.fromHexString(addresses.get("userAddress1"));
		user.auctions = new Array();
		user.save();

		// Add user 2 to the store
		let user2 = new User("2");
		user2.address = Bytes.fromHexString(addresses.get("userAddress2"));
		user2.auctions = new Array();
		user2.save();

		// Add a new auction to the store
		let newAuctionEvent = setupAuction1();
		handleNewAuction(newAuctionEvent);

		// Create a new sell order event
		let newSellOrderEvent = createNewSellOrderEvent(
			0x1,
			0x2,
			BigInt.fromString("1"),
			BigInt.fromString("2")
		);
		handleNewSellOrder(newSellOrderEvent);

		let auctionDetail = AuctionDetail.load("1");
		assert.assertNotNull(auctionDetail);

		let orders = auctionDetail!.orders;
		// Expect the order to be added to the auctionDetail
		// Check that order id is `{auctionId}-{buyAmount}-{sellAmount}-{userId}`
		assert.stringEquals(orders![0], "1-2-1-2");
		log.success("handleNewSellOrder adds order to AuctionDetail", []);
	});

	test("Can call handleCancellationSellOrder and check if order is removed from AuctionDetail order list", () => {
		// Add user 1 to the store
		let user = new User("1");
		user.address = Bytes.fromHexString(addresses.get("userAddress1"));
		user.auctions = new Array();
		user.save();

		// Add user 2 to the store
		let user2 = new User("2");
		user2.address = Bytes.fromHexString(addresses.get("userAddress2"));
		user2.auctions = new Array();
		user2.save();

		// Add a new auction to the store
		let newAuctionEvent = setupAuction1();
		handleNewAuction(newAuctionEvent);

		// Create a new sell order event
		let newSellOrderEvent = createNewSellOrderEvent(
			0x1,
			0x2,
			BigInt.fromString("1"),
			BigInt.fromString("2")
		);
		handleNewSellOrder(newSellOrderEvent);

		let auctionDetail = AuctionDetail.load("1");
		assert.assertNotNull(auctionDetail);

		let orders = auctionDetail!.orders;
		// Expect the order to be added to the auctionDetail
		// Check that order id is `{auctionId}-{sellAmount}-{buyAmount}-{userId}`
		assert.stringEquals(orders![0], "1-2-1-2");
		log.success("handleNewSellOrder adds order to AuctionDetail", []);

		// Create a new cancel sell order event
		let cancelSellOrderEvent = createNewCancelOrderEvent(
			0x1,
			0x2,
			BigInt.fromString("1"),
			BigInt.fromString("2")
		);
		handleCancellationSellOrder(cancelSellOrderEvent);

		auctionDetail = AuctionDetail.load("1");
		orders = auctionDetail!.orders;
		// Expect the order to be removed from the auctionDetail
		assert.assertNull(orders!.length);
		log.success(
			"handleCancellationSellOrder removes order from AuctionDetail",
			[]
		);
	});

	test("Can call handleClaimedFromOrder and check if order is removed from AuctionDetail ordersWithoutClaimed list", () => {
		// Add user 1 to the store
		let user = new User("1");
		user.address = Bytes.fromHexString(addresses.get("userAddress1"));
		user.auctions = new Array();
		user.save();

		// Add user 2 to the store
		let user2 = new User("2");
		user2.address = Bytes.fromHexString(addresses.get("userAddress2"));
		user2.auctions = new Array();
		user2.save();

		// Add a new auction to the store
		let newAuctionEvent = setupAuction1();
		handleNewAuction(newAuctionEvent);

		// Create a new sell order event
		let newSellOrderEvent = createNewSellOrderEvent(
			0x1,
			0x2,
			BigInt.fromString("1"),
			BigInt.fromString("2")
		);
		handleNewSellOrder(newSellOrderEvent);

		let auctionDetail = AuctionDetail.load("1");
		assert.assertNotNull(auctionDetail);

		let orders = auctionDetail!.ordersWithoutClaimed;
		// Expect the order to be added to the auctionDetail
		// Check that order id is `{auctionId}-{buyAmount}-{sellAmount}-{userId}`
		assert.stringEquals(orders![0], "1-2-1-2");
		log.success("handleNewSellOrder adds order to AuctionDetail", []);

		// Create a new claim event
		let claimEvent = createNewClaimEvent(
			0x1,
			0x2,
			BigInt.fromString("1"),
			BigInt.fromString("2")
		);
		handleClaimedFromOrder(claimEvent);

		auctionDetail = AuctionDetail.load("1");
		orders = auctionDetail!.ordersWithoutClaimed;
		// Expect the order to be removed from the auctionDetail
		assert.assertNull(orders!.length);
		log.success(
			"handleClaimedFromOrder removes order from AuctionDetail",
			[]
		);
	});
});
