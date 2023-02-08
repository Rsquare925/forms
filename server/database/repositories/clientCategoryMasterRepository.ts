import prisma from "~/server/database/client";



export async function getAllCategoryNames():
 Promise<CategoryNames[]>{
    const categoryNames = await prisma.client_category_master.findMany({
        select: {
            code: true,
            categoryName: true,
        }
    });

    return categoryNames;
}