import { getUserMasterByEmail } from "~/server/database/repositories/userMasterRepository";
import { ExistsCheck } from "~~/types/ExistsCheck";

export async function doesEmailExists(email: string): Promise<ExistsCheck>{
    let stnExists = await getUserMasterByEmail(email);

    if(stnExists){
        const stnError = `This email ${email} already exists!`;
        return {value: true, message: stnError};
    }
    return {value: false};
}