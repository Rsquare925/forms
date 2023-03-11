import { createGoodsGroup } from '~/server/database/repositories/goodsGroupMasterRepository';
import { goods_group_master } from "@prisma/client";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const goodsGroupData: goods_group_master = {
        goodsGroupName: body.goodsGroupName,
        startDate: body.startDate,
        endDate: body.endDate
    }

    const goodsGroupMaster = await createGoodsGroup(goodsGroupData);

    return goodsGroupMaster;
})