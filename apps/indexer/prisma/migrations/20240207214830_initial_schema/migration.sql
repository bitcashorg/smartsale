-- CreateTable
CREATE TABLE "auction_details" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "exact_order_id" BIGINT,
    "chain_id" TEXT,
    "symbol_auctioning_token" TEXT,
    "symbol_bidding_token" TEXT,
    "address_auctioning_token" TEXT,
    "address_bidding_token" TEXT,
    "decimals_auctioning_token" SMALLINT,
    "decimals_bidding_token" SMALLINT,
    "end_time_timestamp" TIMESTAMP(6),
    "order_cancellation_end_date" TIMESTAMP(6),
    "starting_time_stamp" TIMESTAMP(6),
    "minimum_bidding_amount_per_order" BIGINT,
    "min_funding_threshold" BIGINT,
    "allow_list_manager" TEXT,
    "allow_list_signer" TEXT,
    "current_volume" INTEGER,
    "current_clearing_order_sell_amount" BIGINT,
    "current_clearing_order_buy_amount" BIGINT,
    "current_clearing_price" INTEGER,
    "current_bidding_amount" BIGINT,
    "is_atomic_closure_allowed" BOOLEAN,
    "is_private_auction" BOOLEAN,
    "interest_score" INTEGER,
    "usd_amount_traded" INTEGER,

    CONSTRAINT "auction_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "auction_id" BIGINT,
    "sell_amount" BIGINT,
    "buy_amount" BIGINT,
    "user_id" BIGINT,
    "price" INTEGER,
    "volume" BIGINT,
    "timestamp" TIMESTAMP(6),

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "address" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id","created_at")
);
