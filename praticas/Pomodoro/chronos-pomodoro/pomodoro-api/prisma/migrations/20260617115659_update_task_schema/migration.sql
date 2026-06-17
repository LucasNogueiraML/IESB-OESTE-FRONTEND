/*
  Warnings:

  - You are about to drop the column `createdAt` on the `tasks` table. All the data in the column will be lost.
  - You are about to drop the column `isCompleted` on the `tasks` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `tasks` table. All the data in the column will be lost.
  - Added the required column `duration` to the `tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tasks` DROP COLUMN `createdAt`,
    DROP COLUMN `isCompleted`,
    DROP COLUMN `title`,
    ADD COLUMN `completeDate` INTEGER NULL,
    ADD COLUMN `duration` INTEGER NOT NULL,
    ADD COLUMN `interruptDate` INTEGER NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `startDate` INTEGER NOT NULL,
    ADD COLUMN `type` VARCHAR(191) NOT NULL;
