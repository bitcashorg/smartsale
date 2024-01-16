// For understanding the code better, I use the following assumptions
// AUT - Test Auctioning Token. The auctioneer wants to sell this token
// BDT - Test Bidding Token. The auctioneer wants to buy this token

// While initiating an auction, the exactOrder/initialOrder sellAmount corresponds to AUT and buyAmount corresponds to BDT
// While placing an order, the sellAmount corresponds to BDT and buyAmount corresponds to AUT

import {
	Address,
	BigInt,
	BigDecimal,
	log,
	dataSource,
	store,
	Bytes,
} from "@graphprotocol/graph-ts";
import { ERC20Contract } from "../generated/EasyAuction/ERC20Contract";
import { AuctionDetail, User } from "../generated/schema";
import {
	EasyAuction,
	AuctionCleared,
	CancellationSellOrder,
	ClaimedFromOrder,
	NewAuction,
	NewSellOrder,
	NewUser,
	OwnershipTransferred,
	UserRegistration,
} from "../generated/EasyAuction/EasyAuction";
import { Order } from "../generated/schema";
import sortOrders from "./utils/sortOrders";
import { getChainHexFromName, getChainIdFromName } from "./utils/getChainId";
import { getTokenList } from "./legitTokens";

const ZERO = BigInt.zero();
const ONE = BigInt.fromI32(1);
const TEN = BigInt.fromString("10");

export function handleAuctionCleared(event: AuctionCleared): void {
	const auctioningTokensSold = event.params.soldAuctioningTokens;
	const auctionId = event.params.auctionId;
	const biddingTokensSold = event.params.soldBiddingTokens;

	let auctionDetails = AuctionDetail.load(auctionId.toString());
	if (!auctionDetails) {
		return;
	}
	const decimalAuctioningToken = auctionDetails.decimalsAuctioningToken;
	const decimalBiddingToken = auctionDetails.decimalsBiddingToken;

	const addressAuctioningToken = auctionDetails.addressAuctioningToken;
	const addressBiddingToken = auctionDetails.addressBiddingToken;

	auctionDetails.currentClearingOrderBuyAmount = auctioningTokensSold;
	auctionDetails.currentClearingOrderSellAmount = biddingTokensSold;
	const pricePoint = convertToPricePoint(
		biddingTokensSold,
		auctioningTokensSold,
		decimalAuctioningToken.toI32(),
		decimalBiddingToken.toI32()
	);
	auctionDetails.currentClearingPrice = pricePoint.get("price");
	auctionDetails.currentVolume = pricePoint.get("volume");
	auctionDetails.currentBiddingAmount = biddingTokensSold;
	auctionDetails.interestScore = pricePoint
		.get("volume")
		.div(TEN.pow(<u8>decimalBiddingToken.toI32()).toBigDecimal());
	if (!pricePoint.get("price").equals(ZERO.toBigDecimal())) {
		auctionDetails.usdAmountTraded = getUsdAmountTraded(
			addressBiddingToken,
			addressAuctioningToken,
			biddingTokensSold,
			pricePoint.get("price")
		);
	}

	auctionDetails.save();
}

export function handleCancellationSellOrder(
	event: CancellationSellOrder
): void {
	let auctionId = event.params.auctionId;
	let sellAmount = event.params.sellAmount;
	let buyAmount = event.params.buyAmount;
	let userId = event.params.userId;
	let auctionDetails = AuctionDetail.load(auctionId.toString());
	if (!auctionDetails) {
		return;
	}
	let orderIdsToDelete: Map<string, string> = new Map();
	// Remove order from the list orders
	let orders: string[] = [];
	if (auctionDetails.orders) {
		orders = auctionDetails.orders!;
	}
	let orderId = getOrderEntityId(auctionId, sellAmount, buyAmount, userId);
	let index = orders.indexOf(orderId);
	if (index > -1) {
		let removedOrder = orders.splice(index, 1);
		orderIdsToDelete.set(removedOrder[0], removedOrder[0]);
	}
	auctionDetails.orders = orders;
	// Remove order from the list ordersWithoutClaimed
	let ordersWithoutClaimed: string[] = [];
	if (auctionDetails.ordersWithoutClaimed) {
		ordersWithoutClaimed = auctionDetails.ordersWithoutClaimed!;
	}
	index = ordersWithoutClaimed.indexOf(orderId);
	if (index > -1) {
		let removedOrder = ordersWithoutClaimed.splice(index, 1);
		orderIdsToDelete.set(removedOrder[0], removedOrder[0]);
	}
	auctionDetails.ordersWithoutClaimed = ordersWithoutClaimed;

	// Remove order from the list ordersWithoutDeleted
	orderIdsToDelete.values().forEach((orderId) => {
		store.remove("Order", orderId);
	});

	auctionDetails.save();

	updateClearingOrderAndVolume(auctionDetails.auctionId);
}

// Remove claimed orders
export function handleClaimedFromOrder(event: ClaimedFromOrder): void {
	let auctionId = event.params.auctionId;
	let sellAmount = event.params.sellAmount;
	let buyAmount = event.params.buyAmount;
	let userId = event.params.userId;
	let auctionDetails = AuctionDetail.load(auctionId.toString());
	if (!auctionDetails) {
		return;
	}
	// Remove order from the list of orders in the ordersWithoutClaimed array
	let ordersWithoutClaimed: string[] = [];
	if (auctionDetails.ordersWithoutClaimed) {
		ordersWithoutClaimed = auctionDetails.ordersWithoutClaimed!;
	}
	let orderId = getOrderEntityId(auctionId, sellAmount, buyAmount, userId);
	// If orderId is present in the ordersWithoutClaimed array, remove it
	let index = ordersWithoutClaimed.indexOf(orderId);
	if (index > -1) {
		ordersWithoutClaimed.splice(index, 1);
	}
	auctionDetails.ordersWithoutClaimed = ordersWithoutClaimed;
	auctionDetails.save();
}

export function handleNewAuction(event: NewAuction): void {
	let eventTimeStamp = event.block.timestamp;
	let sellAmount = event.params._auctionedSellAmount;
	let buyAmount = event.params._minBuyAmount;
	let userId = event.params.userId;
	let auctionId = event.params.auctionId;
	let addressAuctioningToken = event.params._auctioningToken;
	let addressBiddingToken = event.params._biddingToken;
	let allowListSigner = event.params.allowListData;
	let allowListContract = event.params.allowListContract;

	let entityId = getOrderEntityId(auctionId, sellAmount, buyAmount, userId);
	let user = User.load(userId.toString());
	if (!user) {
		return;
	}
	let biddingERC20Contract = ERC20Contract.bind(addressBiddingToken);
	let auctioningERC20Contract = ERC20Contract.bind(addressAuctioningToken);
	let auctionContract = EasyAuction.bind(event.address);
	let isAtomicClosureAllowed = auctionContract.auctionData(auctionId).value11;
	let symbolAuctioningToken = auctioningERC20Contract.symbol();
	let decimalAuctioningToken = auctioningERC20Contract.decimals();
	let symbolBiddingToken = biddingERC20Contract.symbol();
	let decimalBiddingToken = biddingERC20Contract.decimals();
	let pricePoint = convertToPricePoint(
		sellAmount,
		buyAmount,
		decimalBiddingToken,
		decimalAuctioningToken
	);

	let isPrivateAuction = allowListContract.equals(
		Address.fromString("0x0000000000000000000000000000000000000000")
	)
		? false
		: true;

	let order = new Order(entityId);
	order.auctionId = auctionId;
	order.buyAmount = buyAmount;
	order.sellAmount = sellAmount;
	order.userId = userId;
	order.userAddress = user.address;
	order.volume = pricePoint.get("volume");
	order.price = ONE.divDecimal(pricePoint.get("price"));
	order.timestamp = eventTimeStamp;
	order.save();
	let auctionDetails = new AuctionDetail(auctionId.toString());
	auctionDetails.auctionId = auctionId;
	auctionDetails.exactOrder = order.id;
	auctionDetails.symbolAuctioningToken = symbolAuctioningToken;
	auctionDetails.symbolBiddingToken = symbolBiddingToken;
	auctionDetails.addressAuctioningToken = addressAuctioningToken;
	auctionDetails.addressBiddingToken = addressBiddingToken;
	auctionDetails.decimalsAuctioningToken = BigInt.fromString(
		`${decimalAuctioningToken}`
	);
	auctionDetails.decimalsBiddingToken = BigInt.fromString(
		`${decimalBiddingToken}`
	);
	auctionDetails.endTimeTimestamp = event.params.auctionEndDate;
	auctionDetails.orderCancellationEndDate =
		event.params.orderCancellationEndDate;
	auctionDetails.startingTimeStamp = eventTimeStamp;
	auctionDetails.minimumBiddingAmountPerOrder =
		event.params.minimumBiddingAmountPerOrder;
	auctionDetails.minFundingThreshold = event.params.minFundingThreshold;
	auctionDetails.allowListManager = event.params.allowListContract;
	auctionDetails.allowListSigner = allowListSigner;
	auctionDetails.currentClearingPrice = ONE.divDecimal(
		pricePoint.get("price")
	);
	auctionDetails.currentBiddingAmount = new BigInt(0);
	auctionDetails.isAtomicClosureAllowed = isAtomicClosureAllowed;
	auctionDetails.isPrivateAuction = isPrivateAuction;
	auctionDetails.interestScore = new BigDecimal(new BigInt(0));
	auctionDetails.usdAmountTraded = new BigDecimal(new BigInt(0));
	auctionDetails.chainId = getChainHexFromName(dataSource.network());
	auctionDetails.currentVolume = BigDecimal.fromString("0");
	auctionDetails.currentClearingOrderSellAmount = new BigInt(0);
	auctionDetails.currentClearingOrderBuyAmount = new BigInt(0);
	auctionDetails.orders = [];
	auctionDetails.ordersWithoutClaimed = [];
	auctionDetails.save();
}

export function convertToPricePoint(
	sellAmount: BigInt,
	buyAmount: BigInt,
	decimalsBuyToken: number,
	decimalsSellToken: number
): Map<string, BigDecimal> {
	if (buyAmount.equals(ZERO)) {
		let pricePoint = new Map<string, BigDecimal>();
		pricePoint.set("price", BigDecimal.fromString("0"));
		pricePoint.set("volume", BigDecimal.fromString("1"));

		return pricePoint;
	}
	let bidByAuctionDecimal = TEN.pow(<u8>decimalsBuyToken).divDecimal(
		TEN.pow(<u8>decimalsSellToken).toBigDecimal()
	);

	let price: BigDecimal = sellAmount
		.divDecimal(buyAmount.toBigDecimal())
		.times(bidByAuctionDecimal);
	let volume: BigDecimal = sellAmount.divDecimal(
		TEN.pow(<u8>decimalsSellToken).toBigDecimal()
	);

	let pricePoint = new Map<string, BigDecimal>();
	pricePoint.set("price", price);
	pricePoint.set("volume", volume);

	return pricePoint;
}

/**
 *	@dev This function is called when a new sell order is placed
 *  OrderID is generated by concatenating auctionId, sellAmount, buyAmount and userId
 */
export function handleNewSellOrder(event: NewSellOrder): void {
	let auctionId = event.params.auctionId;
	let sellAmount = event.params.sellAmount;
	let buyAmount = event.params.buyAmount;
	let userId = event.params.userId;

	let user = User.load(userId.toString());
	if (!user) {
		user = new User(userId.toString());
	}

	let auctionDetails = AuctionDetail.load(auctionId.toString());
	if (!auctionDetails) {
		return;
	}

	let entityId = `${auctionId.toString()}-${sellAmount.toString()}-${buyAmount.toString()}-${userId.toString()}`;
	let pricePoint = convertToPricePoint(
		sellAmount,
		buyAmount,
		auctionDetails.decimalsAuctioningToken.toI32(),
		auctionDetails.decimalsBiddingToken.toI32()
	);

	let order = new Order(entityId);
	order.auctionId = auctionId;
	order.buyAmount = buyAmount;
	order.sellAmount = sellAmount;
	order.userId = userId;
	order.userAddress = user.address;
	order.price = pricePoint.get("price");
	order.volume = pricePoint.get("volume");
	order.timestamp = event.block.timestamp;
	order.save();

	let orders: string[] = [];
	if (auctionDetails.orders) {
		orders = auctionDetails.orders!;
	}
	orders.push(order.id);
	auctionDetails.orders = orders;

	let ordersWithoutClaimed: string[] = [];
	if (auctionDetails.ordersWithoutClaimed) {
		ordersWithoutClaimed = auctionDetails.ordersWithoutClaimed!;
	}
	ordersWithoutClaimed.push(order.id);
	auctionDetails.ordersWithoutClaimed = ordersWithoutClaimed;
	auctionDetails.ordersWithoutClaimed = ordersWithoutClaimed;

	// Check if auctionId is present in userAuctions list. If not, add it.
	let userAuctions = user.auctions;
	if (!userAuctions.includes(auctionId.toString())) {
		userAuctions.push(auctionId.toString());
		user.auctions = userAuctions;
	}
	user.save();
	auctionDetails.save();

	updateClearingOrderAndVolume(auctionDetails.auctionId);
}

export function handleNewUser(event: NewUser): void {
	let userId = event.params.userId;
	let userAddress = event.params.userAddress;
	let user = new User(userId.toString());
	user.address = userAddress;
	user.auctions = new Array();
	user.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleUserRegistration(event: UserRegistration): void {}

export function getOrderEntityId(
	auctionId: BigInt,
	sellAmount: BigInt,
	buyAmount: BigInt,
	userId: BigInt
): string {
	return `${auctionId.toString()}-${sellAmount.toString()}-${buyAmount.toString()}-${userId.toString()}`;
}

function getUsdAmountTraded(
	addressBiddingToken: Bytes,
	addressAuctioningToken: Bytes,
	currentBiddingAmount: BigInt,
	currentClearingPrice: BigDecimal
): BigDecimal {
	const legitTokensList = getTokenList(
		getChainIdFromName(dataSource.network())
	);
	if (!legitTokensList) {
		return ZERO.toBigDecimal();
	}

	// Check if bidding token is a legit token
	let isBiddingTokenLegit = legitTokensList.tokenAddressList.includes(
		addressBiddingToken.toHexString().toLowerCase()
	);
	if (isBiddingTokenLegit) {
		return currentBiddingAmount.toBigDecimal();
	}

	// Check if auctioning token is a legit token
	let isAuctioningTokenLegit = legitTokensList.tokenAddressList.includes(
		addressAuctioningToken.toHexString().toLowerCase()
	);
	if (isAuctioningTokenLegit) {
		return currentBiddingAmount.toBigDecimal().div(currentClearingPrice);
	}
	return ZERO.toBigDecimal();
}

function updateClearingOrderAndVolume(auctionId: BigInt): void {
	let auctionDetails = AuctionDetail.load(auctionId.toString());
	if (!auctionDetails) {
		return;
	}

	const addressAuctioningToken = auctionDetails.addressAuctioningToken;
	const addressBiddingToken = auctionDetails.addressBiddingToken;
	let decimalAuctioningToken = auctionDetails.decimalsAuctioningToken;
	let decimalBiddingToken = auctionDetails.decimalsBiddingToken;
	let orders = sortOrders(auctionDetails.orders!);
	const initialOrderDetailsList = auctionDetails.exactOrder.split("-");
	const initialOrderSellAmount = BigInt.fromString(
		initialOrderDetailsList[1]
	);
	const initialOrderBuyAmount = BigInt.fromString(initialOrderDetailsList[2]);

	const auctioningTokenAmountOfInitialOrder = initialOrderSellAmount;
	const biddingTokenAmountOfInitialOrder = initialOrderBuyAmount;

	let biddingTokenTotal = ZERO;
	let currentOrder: Order | null = null;

	// Loop through all the sorted orders
	// Orders are sorted from highest price to lowest
	for (let i = 0; i < orders.length; i++) {
		let order = Order.load(orders[i]);
		if (!order) {
			return;
		}
		currentOrder = order;

		biddingTokenTotal = biddingTokenTotal.plus(order.sellAmount || ZERO);

		if (
			biddingTokenTotal
				.divDecimal(auctioningTokenAmountOfInitialOrder.toBigDecimal())
				.ge(order.sellAmount.divDecimal(order.buyAmount.toBigDecimal()))
		) {
			break;
		}
	}

	if (!currentOrder) {
		return;
	}

	if (
		biddingTokenTotal.ge(ZERO) &&
		biddingTokenTotal
			.divDecimal(auctioningTokenAmountOfInitialOrder.toBigDecimal())
			.ge(
				currentOrder.sellAmount.divDecimal(
					currentOrder.buyAmount.toBigDecimal()
				)
			)
	) {
		let uncoveredBids = biddingTokenTotal.minus(
			auctioningTokenAmountOfInitialOrder
				.times(currentOrder.sellAmount)
				.div(currentOrder.buyAmount)
		);

		if (currentOrder.sellAmount.gt(uncoveredBids)) {
			let volume = currentOrder.sellAmount.minus(uncoveredBids);
			let currentBiddingAmount = biddingTokenTotal
				.minus(currentOrder.sellAmount)
				.plus(volume);
			auctionDetails.currentClearingOrderBuyAmount =
				currentOrder.buyAmount;
			auctionDetails.currentClearingOrderSellAmount =
				currentOrder.sellAmount;
			auctionDetails.currentClearingPrice = currentOrder.price;
			auctionDetails.currentClearingPrice = convertToPricePoint(
				currentOrder.sellAmount,
				currentOrder.buyAmount,
				decimalAuctioningToken.toI32(),
				decimalBiddingToken.toI32()
			).get("price");
			auctionDetails.currentVolume = new BigDecimal(volume);
			auctionDetails.currentBiddingAmount = currentBiddingAmount;
			auctionDetails.interestScore = currentBiddingAmount
				.toBigDecimal()
				.div(TEN.pow(<u8>decimalBiddingToken.toI32()).toBigDecimal());
			auctionDetails.usdAmountTraded = getUsdAmountTraded(
				addressBiddingToken,
				addressAuctioningToken,
				currentBiddingAmount,
				currentOrder.price
			);
			auctionDetails.save();
			return;
		} else {
			let clearingOrderSellAmount = biddingTokenTotal.minus(
				currentOrder.sellAmount
			);
			let clearingOrderBuyAmount = auctioningTokenAmountOfInitialOrder;
			const currentBiddingAmount = biddingTokenTotal.minus(
				currentOrder.sellAmount
			);
			auctionDetails.currentClearingOrderBuyAmount = clearingOrderBuyAmount;
			auctionDetails.currentClearingOrderSellAmount = clearingOrderSellAmount;
			const currentClearingPrice = convertToPricePoint(
				clearingOrderSellAmount,
				clearingOrderBuyAmount,
				decimalAuctioningToken.toI32(),
				decimalBiddingToken.toI32()
			).get("price");
			auctionDetails.currentClearingPrice = currentClearingPrice;
			auctionDetails.currentVolume = BigDecimal.fromString("0");
			auctionDetails.currentBiddingAmount = currentBiddingAmount;
			auctionDetails.interestScore = currentBiddingAmount
				.toBigDecimal()
				.div(TEN.pow(<u8>decimalBiddingToken.toI32()).toBigDecimal());
			auctionDetails.usdAmountTraded = getUsdAmountTraded(
				addressBiddingToken,
				addressAuctioningToken,
				currentBiddingAmount,
				currentClearingPrice
			);
			auctionDetails.save();
			return;
		}
	} else if (biddingTokenTotal.ge(biddingTokenAmountOfInitialOrder)) {
		const clearingOrderBuyAmount = auctioningTokenAmountOfInitialOrder;
		const clearingOrderSellAmount = biddingTokenTotal;
		auctionDetails.currentClearingOrderBuyAmount = clearingOrderBuyAmount;
		auctionDetails.currentClearingOrderSellAmount = clearingOrderSellAmount;
		const currentClearingPrice = convertToPricePoint(
			clearingOrderSellAmount,
			clearingOrderBuyAmount,
			decimalAuctioningToken.toI32(),
			decimalBiddingToken.toI32()
		).get("price");
		auctionDetails.currentClearingPrice = currentClearingPrice;
		auctionDetails.currentVolume = BigDecimal.fromString("0");
		auctionDetails.currentBiddingAmount = biddingTokenTotal;
		auctionDetails.interestScore = biddingTokenTotal
			.toBigDecimal()
			.div(TEN.pow(<u8>decimalBiddingToken.toI32()).toBigDecimal());
		auctionDetails.usdAmountTraded = getUsdAmountTraded(
			addressBiddingToken,
			addressAuctioningToken,
			biddingTokenTotal,
			currentClearingPrice
		);

		auctionDetails.save();
		return;
	} else {
		const clearingOrderBuyAmount = auctioningTokenAmountOfInitialOrder;
		const clearingOrderSellAmount = biddingTokenAmountOfInitialOrder;
		const volume = new BigDecimal(biddingTokenTotal).times(
			auctioningTokenAmountOfInitialOrder.divDecimal(
				new BigDecimal(biddingTokenAmountOfInitialOrder)
			)
		);
		auctionDetails.currentClearingOrderBuyAmount = clearingOrderBuyAmount;
		auctionDetails.currentClearingOrderSellAmount = clearingOrderSellAmount;
		const currentClearingPrice = convertToPricePoint(
			clearingOrderSellAmount,
			clearingOrderBuyAmount,
			decimalAuctioningToken.toI32(),
			decimalBiddingToken.toI32()
		).get("price");
		auctionDetails.currentClearingPrice = currentClearingPrice;
		auctionDetails.currentVolume = volume;
		auctionDetails.currentBiddingAmount = biddingTokenTotal;
		auctionDetails.interestScore = biddingTokenTotal
			.toBigDecimal()
			.div(TEN.pow(<u8>decimalBiddingToken.toI32()).toBigDecimal());
		auctionDetails.usdAmountTraded = getUsdAmountTraded(
			addressBiddingToken,
			addressAuctioningToken,
			biddingTokenTotal,
			currentClearingPrice
		);
		auctionDetails.save();
		return;
	}
}
