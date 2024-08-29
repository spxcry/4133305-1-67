/*
  Warnings:

  - You are about to drop the column `naem` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `naem`,
    ADD COLUMN `name` VARCHAR(191) NULL;
