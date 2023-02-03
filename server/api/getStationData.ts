import { getStnData } from "~/server/database/repositories/stnMasterRepository";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const stnData = await getStnData(body.stnCode);
    return stnData;
})