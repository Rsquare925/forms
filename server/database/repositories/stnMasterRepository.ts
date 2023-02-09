import prisma from "~/server/database/client";
import { station_master } from "@prisma/client";

export async function createStn(stnData: StnMaster){
    try{
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
    catch(err){
        console.log('error: ', err!.toString())
    }
    
}

export async function getAllStnNames():
 Promise<StnNames[]>{
    const stnNames = await prisma.station_master.findMany({
        select: {
            stnCode: true,
            stnName: true,
        }
    });

    return stnNames;
}

export async function getStnData(stnCode: string): Promise<station_master | null>{
    return await prisma.station_master.findUnique({
        where: {
          stnCode: stnCode,
        },
      });
}
