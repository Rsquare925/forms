import prisma from "~/server/database/client";
import { UserMaster } from "~~/types/UserMaster";

export async function getUserMasterByEmail(email: string): Promise<boolean>{
    const username =  await prisma.user_master.findUnique({
        where: {
            email: email,
        },
        select:  {
            username: true,
        }
    })
    return username ? true : false;
}

export async function createUser(userData: UserMaster){
    const user = await prisma.user_master.create({
        data: {
            username: userData.username,
            password: userData.password,
            email: userData.email,
            startDate: userData.startDate,
            closeDate: userData.closeDate,
            officeLink: userData.officeLink,
            mobileNo: userData.mobileNo
        }
    })
    return user;
}