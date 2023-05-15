/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[google_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `password_hash` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_authorId_fkey`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `CreatedDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `ModifiedDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `google_id` VARCHAR(191) NULL,
    ADD COLUMN `password_hash` VARCHAR(191) NOT NULL,
    ADD COLUMN `reset_token` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `Post`;

-- CreateIndex
CREATE UNIQUE INDEX `User_google_id_key` ON `User`(`google_id`);
