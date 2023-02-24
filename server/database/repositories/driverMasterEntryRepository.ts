import prisma from "~/server/database/client";
import { driver_master_entry } from '@prisma/client';

async function getLatestDriverCode(){
    const latestRow = await prisma.driver_master_entry.findFirst({
        orderBy: {
            driverCode: "desc"
        }
    })
    if (latestRow){
        const codeInNo = String(Number(latestRow.driverCode) + 1).padStart(10, '0');
        return codeInNo;
    }
    return "0000000001"
}

export async function createDriver(driverData: driver_master_entry){
    const driverCode = await getLatestDriverCode();

    const driver = await prisma.driver_master_entry.create({
        data: {
            driverCode: driverCode,
            driverName: driverData.driverName,
            fatherName: driverData.fatherName,
            address: driverData.address,
            mobileNo: driverData.mobileNo,
            licenseNo: driverData.licenseNo,
            licenseDate: driverData.licenseDate,
            issuedBy: driverData.issuedBy,
            validUpto: driverData.validUpto
        }
    })
    return driver;

}