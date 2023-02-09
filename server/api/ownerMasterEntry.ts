import { createOwner } from '~/server/database/repositories/ownerMasterEntryRepository';
import { owner_master_entry } from "@prisma/client";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const ownerData: owner_master_entry = {

        ownerName: body.ownerName,
        fatherName: body.fatherName,
        address: body.address,
        addressT: body.addressT,
        mobileNo: body.mobileNo,
        panNo: body.panNo,
        tds: body.tds
    }

    const ownerMaster = await createOwner(ownerData);

    return ownerMaster;
})