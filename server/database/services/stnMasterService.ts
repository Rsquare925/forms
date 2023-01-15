import { getStnMasterByStnCode } from "~/server/database/repositories/stnMasterRepository";

type ExistsCheck = {
    value: boolean
    message?: string
};

export async function doesStnExists(stnCode: string): Promise<ExistsCheck>{
    let stnExists = await getStnMasterByStnCode(stnCode);
    let stnError: string;

    if(stnExists){
        stnError = `This stn ${stnCode} already exists!`;
        return {value: true, message: stnError};
    }
    return {value: false};
}