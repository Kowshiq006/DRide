/*
  Warnings:

  - You are about to drop the column `Status` on the `RideRequest` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "RideRequest" DROP COLUMN "Status",
ADD COLUMN     "status" "riderStatus" DEFAULT 'available';
