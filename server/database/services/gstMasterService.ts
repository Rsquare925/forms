import { ExistsCheck } from "~/types/ExistsCheck";
import { getGstMasterByPartyName } from "@/server/database/repositories/gstMasterRepositories";

export async function doesPartyExists(num: string): Promise<ExistsCheck>{
    let stnExists = await getGstMasterByPartyName(num);

    if(stnExists){
        const stnError = `This ${num} already exists!`;
        return {value: true, message: stnError};
    }
    return {value: false};
}