<template>
  <div class="form-container">
    <h1 class="text-center text-[2rem] font-bold">LORRY MASTER ENTRY</h1>
    <form class="form">
      <div>
        <label for="lorryNo">LORRY NO*</label><br />
        <input
          v-model="lorryNo"
          type="text"
          maxlength="10"
          name="lorryNo"
          id="lorryNo"
          class=""
          required
        />
      </div>
      <div class="checkbox-container my-4">
        <div>
          <input
            v-model="createLedger"
            type="checkbox"
            name="createLedger"
            id="createLedger"
            class="mr-1"
          />
          <label for="createLedger">CREATE LEDGER</label>
        </div>
        <div>
          <input
            v-model="ownVehicle"
            type="checkbox"
            name="ownVehicle"
            id="ownVehicle"
            class="mr-1"
          />
          <label for="ownVehicle">OWN VEHICLE</label>
        </div>
      </div>

      <div class="">
        <label for="registeredAt">REGISTERED AT</label><br />
        <input
          v-model="registeredAt"
          type="text"
          maxlength="249"
          id="registeredAt"
          name="registeredAt"
        />
      </div>

      <div class="">
        <label for="bodyType">BODY TYPE</label><br />
        <input
          v-model="bodyType"
          type="text"
          maxlength="149"
          id="bodyType"
          name="bodyType"
        />
      </div>

      <div class="">
        <label for="make">MAKE</label><br />
        <input v-model="make" type="text" maxlength="249" id="make" name="make" />
      </div>

      <div class="">
        <label for="model">MODEL</label><br />
        <input v-model="model" type="text" maxlength="249" id="model" name="model" />
      </div>

      <div class="">
        <label for="color">COLOR</label><br />
        <input v-model="color" type="text" maxlength="149" id="color" name="color" />
      </div>

      <div class="">
        <label for="size">SIZE</label><br />
        <input v-model="size" type="text" maxlength="99" id="size" name="size" />
      </div>

      <div class="">
        <label for="chassis">CHASSIS*</label><br />
        <input
          v-model="chassis"
          type="text"
          maxlength="249"
          id="chassis"
          name="chassis"
          required
        />
      </div>

      <div class="">
        <label for="engine">ENGINE*</label><br />
        <input
          v-model="engine"
          type="text"
          maxlength="249"
          id="engine"
          name="engine"
          required
        />
      </div>

      <div>
        <label for="fitnessUpto">FITNESS UPTO</label><br />
        <input v-model="fitnessUpto" type="date" name="fitnessUpto" id="fitnessUpto" />
      </div>

      <div class="mt-2">
        <label for="owner">OWNER</label><br />
        <select v-model="owner" class="min-w-[165px] mt-1" id="owner" name="owner">
          <option value=""></option>
          <option
            v-for="(owner, index) in ownerNames"
            :value="owner.ownerName"
            :key="index"
          >
            {{ owner.ownerName }}
          </option>
        </select>
      </div>

      <div>
        <label for="panNo">PAN NO</label><br />
        <input v-model="panNo" type="text" name="panNo" id="panNo" maxlength="10" />
      </div>

      <div></div>

      <h2 class="mt-4 text-[1.4rem] font-bold">LOAN DETAILS</h2>

      <div></div>

      <div class="mt-4">
        <label for="loanNo">LOAN NO</label><br />
        <input
          v-model="loanNo"
          type="text"
          maxlength="99"
          name="loanNo"
          id="loanNo"
          class=""
        />
      </div>

      <div class="mt-4">
        <label for="emiAmount">EMI AMOUNT</label><br />
        <input
          v-model="emiAmount"
          type="number"
          step="0.01"
          name="emiAmount"
          id="emiAmount"
          min="0"
          placeholder="0.00"
        />
      </div>

      <div>
        <label for="totalEmi">TOTAL EMI</label><br />
        <input
          v-model="totalEmi"
          type="number"
          name="totalEmi"
          id="totalEmi"
          min="0"
          placeholder="0"
        />
      </div>

      <div>
        <label for="emiStartDate">EMI START DATE</label><br />
        <input v-model="emiStartDate" type="date" name="emiStartDate" id="emiStartDate" />
      </div>

      <div>
        <label for="emiEndDate">EMI END DATE</label><br />
        <input v-model="emiEndDate" type="date" name="emiEndDate" id="emiEndDate" />
      </div>

      <div>
        <label for="financeFrom">FINANCE FROM</label><br />
        <input
          v-model="financeFrom"
          type="text"
          maxlength="199"
          name="financeFrom"
          id="financeFrom"
          class=""
        />
      </div>

      <div>
        <label for="emiByBank">EMI BY BANK</label><br />
        <input
          v-model="emiByBank"
          type="text"
          maxlength="199"
          name="emiByBank"
          id="emiByBank"
          class=""
        />
      </div>

      <div class="mt-4">
        <input v-model="noc" type="checkbox" name="noc" id="noc" class="mr-1" />
        <label for="noc">NOC (NO & DATE)</label>
      </div>

      <div>
        <label for="nocDate">NOC DATE</label><br />
        <input v-model="nocDate" type="date" name="nocDate" id="nocDate" />
      </div>

      <div class="mt-2">
        <button class="submit-btn w-[80%]" @click.prevent="submitLorryMasterEntry()">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { Ref } from "@vue/reactivity";
// <!--
// 	code varchar(10) primary key ,
//     lorryNo varchar(10) not null,
//     createLedger bit(1) not null,
//     ownVehicle bit(1) not null,
//     registeredAt varchar(250),
//     bodyType varchar(150),
//     make varchar(250),
//     model varchar(250),
//     color varchar(150),
//     size varchar(100),
//     chassis varchar(250) not null,
//     engine varchar(250) not null,
//     fitnessUpto date,
//     owner varchar(250),
//     panNo varchar(10),
//     loanNo varchar(100),
//     emiAmount decimal(15, 2) not null,
//     totalEmi int unsigned not null,
//     emiStartDate date,
//     emiEndDate date,
//     financeFrom varchar(200),
//     emiByBank varchar(200),
//     noc bit(1) not null,
//     nocDate date,
//     foreign key(owner) references owner_master_entry(ownerName) on update cascade on delete cascade -->

const lorryNo = ref("");
const createLedger = ref(false);
const ownVehicle = ref(false);
const registeredAt: Ref<string | null> = ref(null);
const bodyType: Ref<string | null> = ref(null);
const make: Ref<string | null> = ref(null);
const model: Ref<string | null> = ref(null);
const color: Ref<string | null> = ref(null);
const size: Ref<string | null> = ref(null);
const chassis = ref("");
const engine = ref("");
const fitnessUpto: Ref<string | null> = ref(null);
const owner: Ref<string | null> = ref(null);
const panNo: Ref<string | null> = ref(null);
const loanNo: Ref<string | null> = ref(null);
const emiAmount = ref("");
const totalEmi = ref("");
const emiStartDate: Ref<string | null> = ref(null);
const emiEndDate: Ref<string | null> = ref(null);
const financeFrom: Ref<string | null> = ref(null);
const emiByBank: Ref<string | null> = ref(null);
const noc = ref(false);
const nocDate: Ref<string | null> = ref(null);

const ownerNames: Ref<OwnerName[]> = ref([]);

callOwnerNameApi(ownerNames);

function submitLorryMasterEntry() {
  const inputArr: Ref<string>[] = [lorryNo, chassis, engine];
  const lorryNoEle = document.getElementById("lorryNo")!;
  const chassisEle = document.getElementById("chassis")!;
  const engineEle = document.getElementById("engine")!;

  const inputEleArr: HTMLElement[] = [lorryNoEle, chassisEle, engineEle];

  const errorArr: string[] = ["lorry No", "chassis", "engine"];

  if (validateAllStringInput(inputArr, inputEleArr, errorArr)) {
    console.log("done");
    sendLorryMasterEntryData();
  } else {
    console.log("no");
    return;
  }
}

async function sendLorryMasterEntryData() {
  try {
    const res = await $fetch("/api/lorryMasterEntry", {
      method: "POST",
      body: {
        lorryNo: lorryNo.value,
        createLedger: createLedger.value,
        ownVehicle: ownVehicle.value,
        registeredAt: registeredAt.value,
        bodyType: bodyType.value,
        make: make.value,
        model: model.value,
        color: color.value,
        size: size.value,
        chassis: chassis.value,
        engine: engine.value,
        fitnessUpto: fitnessUpto.value ? new Date(fitnessUpto.value) : fitnessUpto.value,
        owner: owner.value,
        panNo: panNo.value,
        loanNo: loanNo.value,
        emiAmount: emiAmount.value ? Number(emiAmount.value) : 0.0,
        totalEmi: totalEmi.value ? Number(totalEmi) : 0,
        emiStartDate: emiStartDate.value,
        emiEndDate: emiEndDate.value,
        financeFrom: financeFrom.value,
        emiByBank: emiByBank.value,
        noc: noc.value,
        nocDate: nocDate.value ? new Date(nocDate.value) : nocDate.value,
      },
    });
    console.log(res);
  } catch (err) {
    console.log("error: ", err!.toString());
  }
}
</script>

<style scoped></style>
