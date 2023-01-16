import { getStnMasterByStnCode } from "~/server/database/repositories/stnMasterRepository";

type ExistsCheck = {
    value: boolean
    message?: string
};

export async function doesStnExists(stnCode: string): Promise<ExistsCheck>{
    let stnExists = await getStnMasterByStnCode(stnCode);
    
    if(stnExists){
        const stnError = `This stn ${stnCode} already exists!`;
        return {value: true, message: stnError};
    }
    return {value: false};
}