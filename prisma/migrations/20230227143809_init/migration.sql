/*
  Warnings:

  - The `reqID` column on the `RideRequest` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "RideRequest" DROP COLUMN "reqID",
ADD COLUMN     "reqID" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "RideRequest_reqID_key" ON "RideRequest"("reqID");
