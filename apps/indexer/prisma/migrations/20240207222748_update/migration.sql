/*
  Warnings:

  - The primary key for the `auction_details` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `auction_details` table. All the data in the column will be lost.
  - Made the column `exact_order_id` on table `auction_details` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `chain_id` to the `auction_details` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "auction_details" DROP CONSTRAINT "auction_details_pkey",
DROP COLUMN "id",
ALTER COLUMN "exact_order_id" SET NOT NULL,
DROP COLUMN "chain_id",
ADD COLUMN     "chain_id" BIGINT NOT NULL,
ADD CONSTRAINT "auction_details_pkey" PRIMARY KEY ("exact_order_id", "chain_id");
