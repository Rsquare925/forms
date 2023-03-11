import prisma from "~/server/database/client";
import { goods_group_master } from '@prisma/client';

export async function createGoodsGroup(goodsGroupData: goods_group_master){

    const goodsGroup = await prisma.goods_group_master.create({
        data: {
            goodsGroupName: goodsGroupData.goodsGroupName,
            startDate: goodsGroupData.startDate,
            endDate: goodsGroupData.endDate
        }
    })
    return goodsGroup;

}