
import { createParty } from "@/server/database/repositories/gstMasterRepositories";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const partyData: GstMaster = {
        nameOfParty: body.nameOfParty,
        typeOfNumber: body.typeOfNumber,
        num: body.num,
        selectedStns: body.stnNames
    }

    const gstMaster = await createParty(partyData);

    return gstMaster;
})