<template>
  <div class="form-container">
    <h1 class="text-center text-[2rem] font-bold">DRIVER MASTER ENTRY</h1>
    <form class="form p-6">
      <div>
        <label for="driverName">DRIVER NAME*</label><br />
        <input
          v-model="driverName"
          type="text"
          maxlength="249"
          name="driverName"
          id="driverName"
          class=""
          required
        />
      </div>

      <div>
        <label for="driverName">FATHER's NAME*</label><br />
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

      <div class="">
        <label for="mobileNo">MOBILE NO</label><br />
        <input
          v-model="mobileNo"
          type="text"
          name="mobileNo"
          id="mobileNo"
          maxlength="10"
        />
      </div>

      <div class="">
        <label for="licenseNo">LICENSE NO</label><br />
        <input
          v-model="licenseNo"
          type="text"
          name="licenseNo"
          id="licenseNo"
          maxlength="20"
        />
      </div>

      <div class="">
        <label for="licenseNo">LICENSE DATE</label><br />
        <input v-model="licenseDate" type="date" name="licenseDate" id="licenseDate" />
      </div>

      <div class="">
        <label for="issuedBy">ISSUED BY</label><br />
        <input
          v-model="issuedBy"
          type="text"
          name="issuedBy"
          id="issuedBy"
          maxlength="199"
        />
      </div>

      <div class="">
        <label for="licenseNo">VALID UPTO</label><br />
        <input v-model="validUpto" type="date" name="validUpto" id="validUpto" />
      </div>

      <div>
        <button class="submit-btn w-[80%]" @click.prevent="submitDriverMasterEntry()">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { Ref } from "@vue/reactivity";

const driverName = ref("");
const fatherName = ref("");
const address = ref("");
const mobileNo: Ref<string | null> = ref(null);
const licenseNo: Ref<string | null> = ref(null);
const licenseDate: Ref<string | null> = ref(null);
const issuedBy: Ref<string | null> = ref(null);
const validUpto: Ref<string | null> = ref(null);

function submitDriverMasterEntry() {
  const inputArr: Ref<string>[] = [driverName, fatherName, address];
  const driverNameEle = document.getElementById("driverName")!;
  const fatherNameEle = document.getElementById("fatherName")!;
  const addressEle = document.getElementById("address")!;

  const inputEleArr: HTMLElement[] = [driverNameEle, fatherNameEle, addressEle];

  const errorArr: string[] = ["Name", "Name", "address"];

  if (validateAllStringInput(inputArr, inputEleArr, errorArr)) {
    console.log("done");
    sendDriverMasterEntryData();
  } else {
    console.log("no");
    return;
  }
}

async function sendDriverMasterEntryData() {
  try {
    const res = await $fetch("/api/driverMasterEntry", {
      method: "POST",
      body: {
        driverName: driverName.value,
        fatherName: fatherName.value,
        address: address.value,
        mobileNo: mobileNo.value,
        licenseNo: licenseNo.value,
        licenseDate: licenseDate.value ? new Date(licenseDate.value) : licenseDate.value,
        issuedBy: issuedBy.value,
        validUpto: validUpto.value ? new Date(validUpto.value) : validUpto.value,
      },
    });
    console.log(res);
  } catch (err) {
    console.log("error: ", err!.toString());
  }
}
</script>

<style scoped></style>
