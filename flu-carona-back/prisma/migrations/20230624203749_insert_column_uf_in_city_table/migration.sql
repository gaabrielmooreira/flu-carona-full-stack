/*
  Warnings:

  - A unique constraint covering the columns `[uf]` on the table `State` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `uf` to the `State` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "State" ADD COLUMN     "uf" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "State_uf_key" ON "State"("uf");
