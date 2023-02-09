<template>
  <div class="form-container">
    <h1 class="text-center text-[2rem] font-bold">USER MASTER</h1>
    <form class="form mb-4">
      <div>
        <label for="username">USERNAME*</label><br />
        <input
          v-model="username"
          type="text"
          maxlength="99"
          name="username"
          id="username"
          required
        />
      </div>

      <div>
        <label for="password">PASSWORD*</label><br />
        <input
          v-model="password"
          type="password"
          minlength="8"
          maxlength="100"
          name="password"
          id="password"
          required
        />
      </div>

      <div>
        <label for="email">EMAIL*</label><br />
        <input v-model="email" type="email" name="email" id="email" required />
      </div>

      <div>
        <label for="email">START DATE*</label><br />
        <input v-model="startDate" type="date" name="startDate" id="startDate" required />
      </div>

      <div>
        <label for="closeDate">CLOSE DATE</label><br />
        <input v-model="closeDate" type="date" name="closeDate" id="closeDate" />
      </div>

      <div class="mt-2">
        <label for="officeLink">OFFICE LINK*</label><br />
        <select
          v-model="officeLink"
          class="max-w-[100%] mt-1"
          id="officeLink"
          name="officeLink"
          required
        >
          <option value=""></option>
          <option v-for="(stn, index) in stnNames" :value="stn.stnName" :key="index">
            {{ stn.stnName }}
          </option>
        </select>
      </div>

      <div>
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
        <button class="submit-btn w-[40%] mt-6" @click.prevent="submitUserMaster()">
          SUBMIT
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { Ref } from "@vue/reactivity";

const username = ref("");
const password = ref("");
const email = ref("");
const startDate = ref("");
const closeDate: Ref<string | null> = ref(null);
const officeLink = ref("");
const mobileNo = ref("");

const stnNames: Ref<{ stnName: string; stnCode: string }[]> = ref([]);

function submitUserMaster() {
  const inputArr: Ref<string>[] = [username, startDate];
  const mobileNoEle = document.getElementById("mobileNo")!;
  const usernameEle = document.getElementById("username")!;
  const startDateEle = document.getElementById("startDate")!;
  const emailEle = document.getElementById("email")!;
  const passwordEle = document.getElementById("password")!;
  const officeLinkEle = document.getElementById("officeLink")!;

  const inputEleArr: HTMLElement[] = [usernameEle, startDateEle];

  const errorArr: string[] = ["username", "date"];

  if (
    validateAllStringInput(inputArr, inputEleArr, errorArr) &&
    validatePassword(password.value, passwordEle) &&
    validateEmail(email.value, emailEle) &&
    validateStringInput(officeLink, officeLinkEle, "Office link") &&
    validateMobileNo(mobileNo.value, mobileNoEle)
  ) {
    console.log("done");
    sendUserMasterData();
  } else {
    console.log("no");
    return;
  }
}
// function for sending user data to server api
async function sendUserMasterData() {
  try {
    const res = await $fetch("/api/userMaster", {
      method: "POST",
      body: {
        username: username.value,
        password: password.value,
        email: email.value,
        startDate: new Date(startDate.value),
        closeDate: closeDate.value ? new Date(closeDate.value) : closeDate.value,
        officeLink: officeLink.value,
        mobileNo: mobileNo.value,
      },
    });
    console.log(res);
  } catch (err) {
    console.log("error: ", err!.toString());
  }
}
// get all office links from stn Master table
callStnNamesApi(stnNames);

function validatePassword(password: string, passwordEle: HTMLElement): boolean {
  const trimmedPassword = password.trim();
  if (trimmedPassword.length >= 8) {
    generateFieldsErr(passwordEle);
    return true;
  }
  const errorMsg = "A password should contain at least 8 characters.";
  generateFieldsErr(passwordEle, errorMsg);
  return false;
}
</script>

<style scoped></style>
