-- CreateEnum
CREATE TYPE "riderStatus" AS ENUM ('available', 'booked');

-- CreateTable
CREATE TABLE "RideRequest" (
    "reqID" TEXT NOT NULL,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "budget" INTEGER NOT NULL,
    "Status" "riderStatus" DEFAULT 'available'
);

-- CreateIndex
CREATE UNIQUE INDEX "RideRequest_reqID_key" ON "RideRequest"("reqID");
