import { sendError } from 'h3'
import { createClient } from '~/server/database/repositories/clientMasterRepository';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const clientData: ClientMaster = {
        name: body.name,
        printName: body.printName,
        clientGroup: body.clientGroup,
        categoryGroup: body.categoryGroup,
        clientStn: body.clientStn,
        contactPerson: body.contactPerson,
        address: body.address,
        city: body.city,
        mobileNo: body.mobileNo,
        email: body.email,
        cinNo: body.cinNo,
        panNo: body.panNo,
        dueDays: body.dueDays,
        openingBalance: body.openingBalance,
        reportingTo: body.reportingTo,
        outstandingAt: body.outstandingAt,
        restartDate: body.restartDate,
        billingAddress: body.billingAddress,
        billingCity: body.billingCity,
        gstNo: body.gstNo,
        clientType: body.clientType
    }

    const clientMaster = await createClient(clientData);

    return clientMaster;
})

