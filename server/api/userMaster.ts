import { UserMaster } from '~/types/UserMaster';
import bcrypt from 'bcrypt';
import { doesEmailExists } from "~/server/database/services/userMasterService";
import { createUser } from '~/server/database/repositories/userMasterRepository';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const emailExists = await doesEmailExists(body.email);

    if(emailExists.value === true){
        return sendError(event, createError({ 
            statusCode: 422,
            statusMessage: emailExists.message
        }));
    }
    const encryptedPassword: string = await bcrypt.hash(body.password, 10)

    const userData: UserMaster = {
        username: body.username,
        password: encryptedPassword,
        email: body.email,
        startDate: body.startDate,
        closeDate: body.closeDate,
        officeLink: body.officeLink,
        mobileNo: body.mobileNo
    }

    const userMaster = await createUser(userData);

    return userMaster;
})