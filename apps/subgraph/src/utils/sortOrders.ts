import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";

// Function that sorts orders from highest price to lowest price
function sortOrders(orders: Array<string>): Array<string> {
	orders.sort((a, b) => {
		let orderA = a.split("-");
		let orderABiddingTokenAmount = BigDecimal.fromString(orderA[1]);
		let orderAAuctioningTokenAmount = BigDecimal.fromString(orderA[2]);
		let orderAUserId = BigInt.fromString(orderA[3]);
		let orderB = b.split("-");
		let orderBBiddingTokenAmount = BigDecimal.fromString(orderB[1]);
		let orderBAuctioningTokenAmount = BigDecimal.fromString(orderB[2]);
		let orderBUserId = BigInt.fromString(orderB[3]);

		let orderAPrice = orderABiddingTokenAmount.div(
			orderAAuctioningTokenAmount
		);

		let orderBPrice = orderBBiddingTokenAmount.div(
			orderBAuctioningTokenAmount
		);

		// Check if price of order A is greater than order B
		if (
			orderAPrice.gt(orderBPrice) || 
			orderABiddingTokenAmount.gt(orderBBiddingTokenAmount) || 
			orderAUserId.gt(orderBUserId)) {
			return 1;
		}

		return -1;
	});
	return orders;
}

export default sortOrders;