import prisma from "~/server/database/client";
import { owner_master_entry } from '@prisma/client';


export async function createOwner(ownerData: owner_master_entry){
    const owner = await prisma.owner_master_entry.create({
        data: {
            ownerName: ownerData.ownerName,
            fatherName: ownerData.fatherName,
            address: ownerData.address,
            addressT: ownerData.addressT,
            mobileNo: ownerData.mobileNo,
            panNo:  ownerData.panNo,
            tds: ownerData.tds
        }
    })
    return owner;

}

export async function getAllOwnerNames():
 Promise<OwnerName[]>{
    const ownerNames = await prisma.owner_master_entry.findMany({
        select: {
            ownerName: true
        }
    });

    return ownerNames;
}
