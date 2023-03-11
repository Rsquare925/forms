<template>
  <div class="form-container">
    <h1 class="text-center text-[2rem] font-bold">GOODS GROUP MASTER</h1>
    <form class="form p-6">
      <div>
        <label for="goodsGroupName">GOODS GROUP NAME*</label><br />
        <input
          v-model="goodsGroupName"
          type="text"
          maxlength="149"
          name="goodsGroupName"
          id="goodsGroupName"
          required
        />
      </div>

      <div class="">
        <label for="startDate">START DATE*</label><br />
        <input v-model="startDate" type="date" name="startDate" id="startDate" required />
      </div>

      <div class="">
        <label for="endDate">END DATE</label><br />
        <input v-model="endDate" type="date" name="endDate" id="endDate" />
      </div>

      <div>
        <button class="submit-btn mt-6" @click.prevent="submitGoodsGroupMaster()">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { Ref } from "@vue/reactivity";

const goodsGroupName = ref("");
const startDate = ref("");
const endDate: Ref<string | null> = ref(null);

function submitGoodsGroupMaster() {
  const inputArr: Ref<string>[] = [goodsGroupName, startDate];
  const goodsGroupNameEle = document.getElementById("goodsGroupName")!;
  const startDateEle = document.getElementById("startDate")!;

  const inputEleArr: HTMLElement[] = [goodsGroupNameEle, startDateEle];

  const errorArr: string[] = ["Name", "Date"];

  if (validateAllStringInput(inputArr, inputEleArr, errorArr)) {
    console.log("done");
    sendGoodsGroupMasterData();
  } else {
    console.log("no");
    return;
  }
}

async function sendGoodsGroupMasterData() {
  try {
    const res = await $fetch("/api/goodsGroupMaster", {
      method: "POST",
      body: {
        goodsGroupName: goodsGroupName.value,
        startDate: new Date(startDate.value),
        endDate: endDate.value ? new Date(endDate.value) : endDate.value,
      },
    });
    console.log(res);
  } catch (err) {
    console.log("error: ", err!.toString());
  }
}
</script>

<style scoped></style>
