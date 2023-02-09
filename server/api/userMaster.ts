import bcrypt from 'bcrypt';
import { createUser } from '~/server/database/repositories/userMasterRepository';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

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