-- CreateTable
CREATE TABLE `station_master` (
    `stnCode` VARCHAR(191) NOT NULL,
    `stnName` VARCHAR(191) NULL,
    `startDate` VARCHAR(191) NOT NULL,
    `endDate` VARCHAR(191) NULL,
    `booking` BOOLEAN NOT NULL,
    `delivery` BOOLEAN NOT NULL,
    `transshipment` BOOLEAN NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `pincode` VARCHAR(191) NOT NULL,
    `contactPerson` VARCHAR(191) NOT NULL,
    `officePhoneNo` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `mobileNo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`stnCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
