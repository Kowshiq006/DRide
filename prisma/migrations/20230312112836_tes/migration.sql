/*
  Warnings:

  - The primary key for the `RideRequest` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `RideRequest` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "RideRequest" DROP CONSTRAINT "RideRequest_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "RideRequest_pkey" PRIMARY KEY ("id");
