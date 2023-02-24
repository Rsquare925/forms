import { createDriver } from '~/server/database/repositories/driverMasterEntryRepository';
import { driver_master_entry } from "@prisma/client";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const driverData: driver_master_entry = {
        driverCode: "",
        driverName: body.driverName,
        fatherName: body.fatherName,
        address: body.address,
        mobileNo: body.mobileNo,
        licenseNo: body.licenseNo,
        licenseDate: body.licenseDate,
        issuedBy: body.issuedBy,
        validUpto: body.validUpto
    }

    const driverMaster = await createDriver(driverData);

    return driverMaster;
})