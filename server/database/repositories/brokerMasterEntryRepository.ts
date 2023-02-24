import prisma from "~/server/database/client";
import { broker_master_entry } from '@prisma/client';

async function getLatestBrokerCode(){
    const latestRow = await prisma.broker_master_entry.findFirst({
        orderBy: {
            brokerCode: "desc"
        }
    })
    if (latestRow){
        const codeInNo = String(Number(latestRow.brokerCode) + 1).padStart(10, '0');
        return codeInNo;
    }
    return "0000000001"
}

export async function createBroker(brokerData: broker_master_entry){
    const brokerCode = await getLatestBrokerCode();

    const broker = await prisma.broker_master_entry.create({
        data: {
            brokerCode: brokerCode,
            branch: brokerData.branch,
            brokerName: brokerData.brokerName,
            contactPerson: brokerData.contactPerson,
            address: brokerData.address,
            mobileNo: brokerData.mobileNo,
            panNo: brokerData.panNo,
            zone: brokerData.zone,
            openBody: brokerData.openBody,
            trailer: brokerData.trailer,
            container: brokerData.container,
        }
    })
    return broker;

}