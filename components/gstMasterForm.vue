<template>
  <div class="form-container">
    <h1 class="text-center text-[2rem] font-bold">GST MASTER</h1>
    <form class="form p-4">
      <div>
        <label for="nameOfParty">PARTY NAME*</label><br />
        <input
          v-model="nameOfParty"
          type="text"
          maxlength="199"
          name="nameOfParty"
          id="nameOfParty"
          required
        />
      </div>

      <div class="">
        <input
          v-model="type"
          value="panNo"
          type="radio"
          id="pan"
          name="type"
          class="mr-2"
        />
        <label for="pan">PAN</label><br />

        <input
          v-model="type"
          type="radio"
          id="aadhaar"
          name="type"
          value="aadhaarNo"
          class="mr-2"
        />
        <label for="aadhaar">AADHAAR</label><br />

        <input
          v-model="type"
          type="radio"
          id="gst"
          name="type"
          value="gstNo"
          class="mr-2"
        />
        <label for="gst">GST</label><br />

        <input
          v-model="type"
          type="radio"
          id="mobile"
          name="type"
          value="mobileNo"
          class="mr-2"
        />
        <label for="mobile">MOBILE</label>
      </div>

      <div v-show="type === 'panNo'">
        <label for="panNo">PAN NO*</label><br />
        <input
          v-model="panNo"
          type="text"
          name="panNo"
          id="panNo"
          maxlength="10"
          required
        />
      </div>

      <div v-show="type === 'aadhaarNo'">
        <label for="aadhaarNo">AADHAAR NO*</label><br />
        <input
          v-model="aadhaarNo"
          type="text"
          name="aadhaarNo"
          id="aadhaarNo"
          maxlength="12"
          required
        />
      </div>

      <div v-show="type === 'gstNo'">
        <label for="gst">GST NO*</label><br />
        <input
          v-model="gstNo"
          type="text"
          name="gstNo"
          id="gstNo"
          maxlength="15"
          required
        />
      </div>

      <div v-show="type === 'mobileNo'">
        <label for="mobileNo">MOBILE NO*</label><br />
        <input
          v-model="mobileNo"
          type="text"
          name="mobileNo"
          id="mobileNo"
          maxlength="10"
          required
        />
      </div>

      <div>
        <div class="center popup">
          <label>
            <input
              @change="selectAll"
              class="font-bold p-3 mx-2 my-4 border-b-grey border-2 check-all"
              type="checkbox"
            />
            Select All<br />
          </label>
          <label v-for="stn in stnNames">
            <input
              class="font-bold p-3 mx-2 checkbox"
              type="checkbox"
              :value="stn.stnName"
              v-model="selectedStns"
            />
            {{ stn.stnName }}<br />
          </label>
        </div>
        <div class="overlay" @click="toggleOverlay"></div>
        <button
          @click="toggleOverlay"
          class="border-emerald-500 border-2 hover:border-blue-500 mt-5"
          id="select-branches-btn"
          type="button"
        >
          SELECT BRANCHES
        </button>
      </div>

      <div>
        <button class="submit-btn w-[40%]" @click.prevent="submitGstMaster()">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { Ref } from "@vue/reactivity";

const nameOfParty = ref("");
const type = ref("");
const panNo = ref("");
const aadhaarNo = ref("");
const gstNo = ref("");
const mobileNo = ref("");
const selectedStns: Ref<string[]> = ref([]);

const stnNames: Ref<StnNames[]> = ref([]);
callStnNamesApi(stnNames);

function submitGstMaster() {
  const nameOfPartyEle = document.getElementById("nameOfParty")!;

  if (
    validateStringInput(nameOfParty, nameOfPartyEle, "Party's Name") &&
    validateType() &&
    validateBranches()
  ) {
    console.log("done");
    sendGstMasterData();
    // sendUserMasterData();
  } else {
    console.log("no");
    return;
  }
}

async function sendGstMasterData() {
  try {
    const res = await $fetch("/api/gstMaster", {
      method: "POST",
      body: {
        nameOfParty: nameOfParty.value,
        typeOfNumber: type.value,
        num: panNo.value
          ? panNo.value
          : mobileNo.value
          ? mobileNo.value
          : aadhaarNo.value
          ? aadhaarNo.value
          : gstNo.value,

        stnNames: selectedStns.value,
      },
    });
    console.log(res);
  } catch (err) {
    console.log("error: ", err!.toString());
  }
}

// for opening and closing modal
function toggleOverlay() {
  document.querySelector(".overlay")!.classList.toggle("open");
  document.querySelector(".popup")!.classList.toggle("open");
}

// function for selecting and deselecting checkbox at once
function selectAll() {
  const checkAll: HTMLInputElement = document.querySelector(".check-all")!;
  const checkInputs = document.querySelectorAll(".checkbox");
  const isChecked = checkAll.checked;

  for (let i = 0; i < checkInputs.length; i++) {
    const checkInputEle: HTMLInputElement = checkInputs[i] as HTMLInputElement;
    checkInputEle.checked = isChecked;
    if (isChecked) {
      selectedStns.value.push(checkInputEle.value);
    } else {
      selectedStns.value.pop();
    }
  }
}

// for checking if user selected at least one branch or not
function validateBranches(): boolean {
  const selectBranchesBtn: HTMLElement = document.getElementById("select-branches-btn")!;
  if (selectedStns.value.length === 0) {
    const errorMsg = "Select at least one";
    generateFieldsErr(selectBranchesBtn, errorMsg);
    return false;
  }
  generateFieldsErr(selectBranchesBtn);
  return true;
}

// for checking if user selected any type or not
function validateType(): boolean {
  const typeContainerEle: HTMLElement = document.getElementById("pan")!;

  generateFieldsErr(typeContainerEle);

  if (type.value === "panNo") {
    const panNoEle = document.getElementById("panNo")!;
    return validateFieldByLen(panNo.value, panNoEle, 15);
  } else if (type.value === "aadhaarNo") {
    const aadhaarNoEle = document.getElementById("aadhaarNo")!;
    return validateFieldByLen(aadhaarNo.value, aadhaarNoEle, 12);
  } else if (type.value === "mobileNo") {
    const mobileNoEle = document.getElementById("mobileNo")!;
    return validateMobileNo(mobileNo.value, mobileNoEle);
  } else if (type.value === "gstNo") {
    const gstNoEle = document.getElementById("gstNo")!;
    return validateFieldByLen(gstNo.value, gstNoEle, 15);
  } else {
    const errorMsg = "Select a type";
    generateFieldsErr(typeContainerEle, errorMsg);
    return false;
  }
}
</script>

<style scoped></style>
