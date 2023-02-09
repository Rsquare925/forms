<template>
  <div class="form-container">
    <h1 class="text-center text-[2rem] font-bold">OWNER MASTER ENTRY</h1>
    <form class="form p-6">
      <div>
        <label for="ownerName">OWNER NAME*</label><br />
        <input
          v-model="ownerName"
          type="text"
          maxlength="249"
          name="ownerName"
          id="ownerName"
          class=""
          required
        />
      </div>
      <div>
        <label for="printName">FATHER's NAME*</label><br />
        <input
          v-model="fatherName"
          type="text"
          maxlength="199"
          name="fatherName"
          id="fatherName"
          class=""
          required
        />
      </div>

      <div class="input-address">
        <div>
          <label for="address">ADDRESS*</label><br />
          <textarea
            v-model="address"
            type="text"
            id="address"
            name="address"
            maxlength="299"
            row="4"
            required
          ></textarea>
        </div>
      </div>

      <div class="input-address">
        <div>
          <label for="addressT">ADDRESS (T)</label><br />
          <textarea
            v-model="addressT"
            type="text"
            id="addressT"
            name="addressT"
            maxlength="299"
            row="4"
          ></textarea>
        </div>
      </div>

      <div class="vertical-center">
        <label for="mobileNo">MOBILE NO</label><br />
        <input
          v-model="mobileNo"
          type="text"
          name="mobileNo"
          id="mobileNo"
          maxlength="10"
        />
      </div>

      <div>
        <label for="panNo">PAN NO</label><br />
        <input v-model="panNo" type="text" name="panNo" id="panNo" maxlength="10" />
      </div>

      <div class="mt-4">
        <input v-model="tds" type="checkbox" name="tds" id="tds" class="mr-1" />
        <label for="tds">TDS</label>
      </div>

      <div>
        <button class="submit-btn w-[80%]" @click.prevent="submitOwnerMasterEntry()">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { Ref } from "@vue/reactivity";

const ownerName = ref("");
const fatherName = ref("");
const address = ref("");
const addressT = ref("");
const mobileNo: Ref<string | null> = ref(null);
const panNo: Ref<string | null> = ref(null);
const tds = ref(false);

function submitOwnerMasterEntry() {
  const inputArr: Ref<string>[] = [ownerName, fatherName, address];
  const ownerNameEle = document.getElementById("ownerName")!;
  const fatherNameEle = document.getElementById("fatherName")!;
  const addressEle = document.getElementById("address")!;

  const inputEleArr: HTMLElement[] = [ownerNameEle, fatherNameEle, addressEle];

  const errorArr: string[] = ["Name", "Name", "address"];

  if (validateAllStringInput(inputArr, inputEleArr, errorArr)) {
    console.log("done");
    sendOwnerMasterEntryData();
  } else {
    console.log("no");
    return;
  }
}

async function sendOwnerMasterEntryData() {
  try {
    const res = await $fetch("/api/ownerMasterEntry", {
      method: "POST",
      body: {
        ownerName: ownerName.value,
        fatherName: fatherName.value,
        address: address.value,
        addressT: addressT ? addressT.value : null,
        mobileNo: mobileNo.value,
        panNo: panNo.value,
        tds: tds.value,
      },
    });
    console.log(res);
  } catch (err) {
    console.log("error: ", err!.toString());
  }
}
</script>

<style scoped></style>
