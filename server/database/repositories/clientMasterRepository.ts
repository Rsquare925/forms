import prisma from "~/server/database/client";

export async function getAllClientNames():
 Promise<ClientName[]>{
    const clientNames = await prisma.client_master.findMany({
        select: {
            code: true,
            name: true,
        }
    });

    return clientNames;
}

async function getLatestCode(){
    const latestRow = await prisma.client_master.findFirst({
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

export async function createClient(clientData: ClientMaster){
    const code = await getLatestCode();
    const client = await prisma.client_master.create({
        data: {
            code: code,
            name: clientData.name,
            printName: clientData.printName,
            clientGroup: clientData.clientGroup,
            categoryGroup: clientData.categoryGroup,
            clientStn: clientData.clientStn,
            contactPerson: clientData.contactPerson,
            address: clientData.address,
            city: clientData.city,
            mobileNo: clientData.mobileNo,
            email: clientData.email,
            cinNo: clientData.cinNo,
            panNo: clientData.panNo,
            dueDays: clientData.dueDays,
            openingBalance: clientData.openingBalance,
            reportingTo: clientData.reportingTo,
            outstandingAt: clientData.outstandingAt,
            restartDate: clientData.restartDate,
            billingAddress: clientData.billingAddress,
            billingCity: clientData.billingCity,
            gstNo: clientData.gstNo,
            clientType: clientData.clientType
        } 
    })
    return client;
}