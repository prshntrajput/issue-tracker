-- AlterTable
ALTER TABLE `issue` ADD COLUMN `assignedTouserId` VARCHAR(255) NULL;

-- AddForeignKey
ALTER TABLE `Issue` ADD CONSTRAINT `Issue_assignedTouserId_fkey` FOREIGN KEY (`assignedTouserId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
