import { getAllOwnerNames } from "~/server/database/repositories/ownerMasterEntryRepository";

export default defineEventHandler(async (event) => {
    const ownerNames = await getAllOwnerNames();
    if(ownerNames.length === 0){
        return false;
    }
    return ownerNames;
})