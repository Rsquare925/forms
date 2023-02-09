import { createLorry } from '~/server/database/repositories/lorryMasterEntryRepository';
import { lorry_master_entry, owner_master_entry } from "@prisma/client";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const lorryData: lorry_master_entry = {
        code: "",
        lorryNo: body.lorryNo,
        createLedger: body.createLedger,
        ownVehicle: body.ownVehicle,
        registeredAt: body.registeredAt,
        bodyType: body.bodyType,
        make: body.make,
        model: body.model,
        color: body.color,
        size: body.size,
        chassis: body.chassis,
        engine: body.engine,
        fitnessUpto: body.fitnessUpto,
        owner: body.owner,
        panNo: body.panNo,
        loanNo: body.loanNo,
        emiAmount: body.emiAmount,
        totalEmi: body.totalEmi,
        emiStartDate: body.emiStartDate,
        emiEndDate: body.emiEndDate,
        financeFrom: body.financeFrom,
        emiByBank: body.emiByBank,
        noc: body.noc,
        nocDate: body.nocDate,
        
    }

    const lorryMaster = await createLorry(lorryData);

    return lorryMaster;
})