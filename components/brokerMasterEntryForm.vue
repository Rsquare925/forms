<template>
  <div class="form-container">
    <h1 class="text-center text-[2rem] font-bold">BROKER MASTER ENTRY</h1>
    <form class="form p-6">
      <div>
        <label for="branch">BRANCH</label><br />
        <select
          v-model="branch"
          class="min-w-[165px] mt-1"
          id="branch"
          name="branch"
          required
        >
          <option value=""></option>
          <option v-for="(stn, index) in stnNames" :value="stn.stnName" :key="index">
            {{ stn.stnName }}
          </option>
        </select>
      </div>
      <div>
        <label for="brokerName">BROKER NAME*</label><br />
        <input
          v-model="brokerName"
          type="text"
          maxlength="249"
          name="brokerName"
          id="brokerName"
          class=""
          required
        />
      </div>

      <div class="input-address mt-4">
        <div>
          <label for="addressT">CONTACT PERSON*</label><br />
          <input
            v-model="contactPerson"
            type="text"
            maxlength="199"
            name="contactPerson"
            id="contactPerson"
            class=""
            required
          />
        </div>
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

      <div>
        <label for="zone"> ZONE</label><br />
        <input v-model="zone" type="text" name="zone" id="zone" maxlength="99" />
      </div>

      <div class="mt-4">
        <input
          v-model="openBody"
          type="checkbox"
          name="openBody"
          id="openBody"
          class="mr-1"
        />
        <label for="openBody">OPEN BODY</label>
      </div>

      <div class="mt-4">
        <input
          v-model="trailer"
          type="checkbox"
          name="trailer"
          id="trailer"
          class="mr-1"
        />
        <label for="trailer">TRAILER</label>
      </div>

      <div class="mt-4">
        <input
          v-model="container"
          type="checkbox"
          name="container"
          id="container"
          class="mr-1"
        />
        <label for="container">CONTAINER</label>
      </div>

      <div>
        <button class="submit-btn w-[80%]" @click.prevent="submitBrokerMasterEntry()">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { Ref } from "@vue/reactivity";

const branch: Ref<string | null> = ref(null);
const brokerName = ref("");
const contactPerson = ref("");
const address = ref("");
const mobileNo: Ref<string | null> = ref(null);
const panNo: Ref<string | null> = ref(null);
const zone: Ref<string | null> = ref(null);
const openBody = ref(false);
const trailer = ref(false);
const container = ref(false);

const stnNames: Ref<StnNames[]> = ref([]);
callStnNamesApi(stnNames);

function submitBrokerMasterEntry() {
  const inputArr: Ref<string>[] = [brokerName, contactPerson, address];
  const brokerNameEle = document.getElementById("brokerName")!;
  const contactPersonEle = document.getElementById("contactPerson")!;
  const addressEle = document.getElementById("address")!;

  const inputEleArr: HTMLElement[] = [brokerNameEle, contactPersonEle, addressEle];

  const errorArr: string[] = ["Name", "Name", "address"];

  if (validateAllStringInput(inputArr, inputEleArr, errorArr)) {
    console.log("done");
    sendBrokerMasterEntryData();
  } else {
    console.log("no");
    return;
  }
}

async function sendBrokerMasterEntryData() {
  try {
    const res = await $fetch("/api/brokerMasterEntry", {
      method: "POST",
      body: {
        branch: branch.value,
        brokerName: brokerName.value,
        contactPerson: contactPerson.value,
        address: address.value,
        mobileNo: mobileNo.value,
        panNo: panNo.value,
        zone: zone.value,
        openBody: openBody.value,
        trailer: trailer.value,
        container: container.value,
      },
    });
    console.log(res);
  } catch (err) {
    console.log("error: ", err!.toString());
  }
}
</script>

<style scoped></style>
