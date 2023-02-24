import { createBroker } from '~/server/database/repositories/brokerMasterEntryRepository';
import { broker_master_entry } from "@prisma/client";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const brokerData: broker_master_entry = {
        brokerCode: "",
        branch: body.branch,
        brokerName: body.brokerName,
        contactPerson: body.contactPerson,
        address: body.address,
        mobileNo: body.mobileNo,
        panNo: body.panNo,
        zone: body.zone,
        openBody: body.openBody,
        trailer: body.trailer,
        container: body.container,
    }

    const brokerMaster = await createBroker(brokerData);

    return brokerMaster;
})