import { GstMaster } from "~/types/GstMaster";
import { doesPartyExists } from "@/server/database/services/gstMasterService";
import { createParty } from "@/server/database/repositories/gstMasterRepositories";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const partyExists = await doesPartyExists(body.num);

    if(partyExists.value === true){
        return sendError(event, createError({ 
            statusCode: 422,
            statusMessage: partyExists.message
        }));
    }

    const partyData: GstMaster = {
        nameOfParty: body.nameOfParty,
        typeOfNumber: body.typeOfNumber,
        num: body.num,
        selectedStns: body.stnNames
    }

    const gstMaster = await createParty(partyData);

    return gstMaster;
})