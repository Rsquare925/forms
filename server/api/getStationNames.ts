import { getAllStnNames } from "~/server/database/repositories/stnMasterRepository";

export default defineEventHandler(async (event) => {
    const stnNames = await getAllStnNames();
    if(stnNames.length === 0){
        return false;
    }
    return stnNames;
})