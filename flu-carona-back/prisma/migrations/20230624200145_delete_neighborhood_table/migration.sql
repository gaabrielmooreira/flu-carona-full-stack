/*
  Warnings:

  - You are about to drop the column `neighboorhoodId` on the `Stadium` table. All the data in the column will be lost.
  - You are about to drop the `Neighboorhood` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cityId` to the `Stadium` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Neighboorhood" DROP CONSTRAINT "Neighboorhood_cityId_fkey";

-- DropForeignKey
ALTER TABLE "Ride" DROP CONSTRAINT "Ride_startAdressId_fkey";

-- DropForeignKey
ALTER TABLE "Stadium" DROP CONSTRAINT "Stadium_neighboorhoodId_fkey";

-- AlterTable
ALTER TABLE "Ride" ADD COLUMN     "isFinish" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Stadium" DROP COLUMN "neighboorhoodId",
ADD COLUMN     "cityId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Neighboorhood";

-- AddForeignKey
ALTER TABLE "Ride" ADD CONSTRAINT "Ride_startAdressId_fkey" FOREIGN KEY ("startAdressId") REFERENCES "City"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Stadium" ADD CONSTRAINT "Stadium_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
