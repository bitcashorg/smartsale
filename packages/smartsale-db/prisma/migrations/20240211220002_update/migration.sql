/*
  Warnings:

  - Made the column `auction_id` on table `orders` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sell_amount` on table `orders` required. This step will fail if there are existing NULL values in that column.
  - Made the column `buy_amount` on table `orders` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `orders` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "orders" ALTER COLUMN "auction_id" SET NOT NULL,
ALTER COLUMN "sell_amount" SET NOT NULL,
ALTER COLUMN "buy_amount" SET NOT NULL,
ALTER COLUMN "user_id" SET NOT NULL;
