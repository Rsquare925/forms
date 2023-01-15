import { StnMaster } from "~~/types/StnMaster";
import prisma from "~/server/database/client";

export async function getStnMasterByStnCode(stnCode: string): Promise<boolean>{
    const contactPerson =  await prisma.station_master.findUnique({
        where: {
            stnCode: stnCode,
        },
        select:  {
            contactPerson: true,
        }
    })
    return contactPerson ? true : false;
}

export async function createStn(stnData: StnMaster){
    const stn = await prisma.station_master.create({
        data: {
            stnCode: stnData.stnCode,
            stnName: stnData.stnName,
            startDate: stnData.startDate,
            endDate: stnData.endDate,
            booking: stnData.booking,
            delivery: stnData.delivery,
            transshipment: stnData.transshipment,
            address: stnData.address,
            city: stnData.city,
            pincode: stnData.pincode,
            state: stnData.state,
            contactPerson: stnData.contactPerson,
            officePhoneNo: stnData.officePhoneNo,
            email: stnData.email,
            mobileNo: stnData.mobileNo
        }
    })
    return stn;
}