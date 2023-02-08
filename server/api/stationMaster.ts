import { sendError } from 'h3'
import { doesStnExists } from '~/server/database/services/stnMasterService';
import { createStn } from '~/server/database/repositories/stnMasterRepository';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const stnExists = await doesStnExists(body.stnCode);

    if(stnExists.value === true){
        return sendError(event, createError({ 
            statusCode: 422,
            statusMessage: stnExists.message
        }));
    }

    const stnData: StnMaster = {
        stnCode: body.stnCode,
        stnName: body.stnName,
        startDate: body.startDate,
        endDate: body.endDate,
        booking: body.booking,
        delivery: body.delivery,
        transshipment: body.transshipment,
        address: body.address,
        city: body.city,
        pincode: body.pincode,
        state: body.state,
        contactPerson: body.contactPerson,
        officePhoneNo: body.officePhoneNo,
        email: body.email,
        mobileNo: body.mobileNo
    }

    const stnMaster = await createStn(stnData);

    return stnMaster;
})

