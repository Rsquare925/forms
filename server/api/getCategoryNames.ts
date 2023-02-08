import { getAllCategoryNames } from "~/server/database/repositories/clientCategoryMasterRepository";

export default defineEventHandler(async (event) => {
    const categoryNames = await getAllCategoryNames();
    if(categoryNames.length === 0){
        return false;
    }
    return categoryNames;
})