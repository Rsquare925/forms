import { getAllClientNames } from "~/server/database/repositories/clientMasterRepository";

export default defineEventHandler(async (event) => {
    const clientNames = await getAllClientNames();
    if(clientNames.length === 0){
        return false;
    }
    return clientNames;
})