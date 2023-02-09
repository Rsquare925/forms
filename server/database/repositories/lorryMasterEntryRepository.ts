import { lorry_master_entry } from '@prisma/client';
import prisma from "~/server/database/client";

async function getLatestCode(){
    const latestRow = await prisma.lorry_master_entry.findFirst({
        orderBy: {
            code: "desc"
        }
    })
    if (latestRow){
        const codeInNo = String(Number(latestRow.code) + 1).padStart(10, '0');
        return codeInNo;
    }
    return "0000000001"
}

export async function createLorry(lorryData: lorry_master_entry){
    const code = await getLatestCode();
    const lorry = await prisma.lorry_master_entry.create({
        data: {
            code: code,
            lorryNo: lorryData.lorryNo,
            createLedger: lorryData.createLedger,
            ownVehicle: lorryData.ownVehicle,
            registeredAt: lorryData.registeredAt,
            bodyType: lorryData.bodyType,
            make: lorryData.make,
            model: lorryData.model,
            color: lorryData.color,
            size: lorryData.size,
            chassis: lorryData.chassis,
            engine: lorryData.engine,
            fitnessUpto: lorryData.fitnessUpto,
            owner: lorryData.owner,
            panNo: lorryData.panNo,
            loanNo: lorryData.loanNo,
            emiAmount: lorryData.emiAmount,
            totalEmi: lorryData.totalEmi,
            emiStartDate: lorryData.emiStartDate,
            emiEndDate: lorryData.emiEndDate,
            financeFrom: lorryData.financeFrom,
            emiByBank: lorryData.emiByBank,
            noc: lorryData.noc,
            nocDate: lorryData.nocDate,
        }
    })
    return lorry;

}
