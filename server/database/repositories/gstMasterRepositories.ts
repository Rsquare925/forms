import prisma from "~/server/database/client";

export async function getGstMasterByPartyName(num: string): Promise<boolean>{
    const id =  await prisma.gst_master_name.findUnique({
        where: {
            num: num,
        },
        select:  {
            id: true,
        }
    })
    return id ? true : false;
}

export async function createBranches(selectedStns: string[], id: number){
    for(let i=0; i<selectedStns.length; i++){
        const branch = await prisma.gst_master_branches.create({
            data: {
                id: id,
                stnName: selectedStns[i],
                statusActive: true,
            }
        })
    }

}

export async function createParty(partyData: GstMaster){
    const party = await prisma.gst_master_name.create({
        data: {
            nameOfParty: partyData.nameOfParty,
            typeOfNumber: partyData.typeOfNumber,
            num: partyData.num
        }
    });
    const id =  await prisma.gst_master_name.findUnique({
        where: {
            num: partyData.num,
        },
        select:  {
            id: true,
        }
    });

    console.log(id ? createBranches(partyData.selectedStns, id.id) : "Something went wrong with id");

    
    return party;
}