<template>
    <div class="form-container">
        <h1 class="text-center text-[2rem] font-bold">STATION MASTER</h1>
        <form class="form">
            <div>
                <label for="stnCode">STATION CODE*</label><br>
                <input v-model="stnCode" type="text" maxlength="3" name="stnCode" id="stnCode" class=" min-w-[120px] w-[40%]" required>

                
            </div>
            <div>
                <label for="stnName">STATION NAME</label><br>
                <input v-model="stnName" type="text" maxlength="100" name="stnName" id="stnName" required>
            </div>
            <div>
                <label for="startDate">START DATE*</label><br>
                <input v-model="startDate" type="date" name="startDate" id="startDate" required>
            </div>

            <div>
                <label for="endDate">END DATE</label><br>
                <input v-model="endDate" type="date" name="endDate" id="endDate">
            </div>
            <div class="checkbox-container my-4">
                <div>
                    <input v-model="booking" type="checkbox" name="booking" id="booking" class="mr-1">
                    <label for="booking">BOOKING</label>
                </div>
                <div>
                    <input v-model="delivery" type="checkbox" name="delivery" id="delivery" class="mr-1">
                    <label for="delivery">DELIVERY</label>
                </div>
                <div>
                    <input v-model="transshipment" type="checkbox" name="transshipment" id="transshipment" class="mr-1">
                    <label for="transshipment">TRANSSHIPMENT</label>
                </div>
            </div>

            <div class="input-address">
                <div>
                    <label for="address">ADDRESS*</label><br>
                    <textarea v-model="address" type="text" id="address" name="address" maxlength="100" row="3" required></textarea>
                </div>  
                <div>
                    <label for="city">CITY*</label><br>
                    <input v-model="city" type="text" id="city" name="city" maxlength="100" required>
                </div>
                <div>
                    <label for="pin">PIN CODE*</label><br>
                    <input v-model="pincode" type="text" id="pin" name="pin" maxlength="6" required>
                </div>
                <div class="">
                    <label for="state">STATE*</label><br>
                    <select v-model="state" class=" max-w-[90%] overflow-scroll" id="state" name="state" required>
                        <option value=""></option>
                        <option v-for="state in states"
                        :value="state" :key="state">{{state}}</option>
                    </select>
                </div>
                
            </div>

            <div>
                <label for="contactPerson">CONTACT PERSON's NAME*</label><br>
                <input v-model="contactPerson" type="text" maxlength="50" id="contactPerson" name="contactPerson" required>
            </div>

            <div>
                <label for="officePhoneNo">OFFICE PHONE NO</label><br>
                <input v-model="officePhoneNo" type="text" name="officePhoneNo" id="officePhoneNo" maxlength="10">
            </div>

            <div>
                <label for="email">EMAIL*</label><br>
                <input v-model="email" type="email" name="email" id="email" required>
            </div>

            <div>
                <label for="mobileNo">MOBILE NO*</label><br>
                <input v-model="mobileNo" type="text" name="mobileNo" id="mobileNo" maxlength="10" required>
            </div>
            <div>
                <button class="submit-btn w-[80%]" @click.prevent="submitStationMaster()">Submit</button>
            </div>
            <EditFormModal @stnData="(stnData)=>setData(stnData)" :stnNames="stnNames"/>

        </form>

        
    </div>
</template>

<script setup lang="ts">
import { station_master } from '.prisma/client';
import { Ref } from '@vue/reactivity';

const states: string[] = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep", "Delhi", "Puducherry", "Jammu and Kashmir", "Ladakh",
]

const stnCode = ref("");
const stnName = ref("");
const startDate = ref("");
const endDate: Ref<string | null> = ref(null);
const booking = ref(false);
const delivery = ref(false);
const transshipment = ref(false);
const address = ref("");
const city = ref("");
const pincode = ref("");
const state = ref("");
const contactPerson = ref("");
const officePhoneNo: Ref<string | null> = ref(null);
const email = ref("");
const mobileNo = ref("");

const stnNames: Ref<StnNames[]> = ref([]);

callStnNamesApi(stnNames);


// function for setting data to input fields while editing 
function setData(stnData: station_master){
    stnCode.value = stnData.stnCode;
    stnName.value = stnData.stnName;
    startDate.value =  stnData.startDate.toString().split("T")[0];
    endDate.value = stnData.endDate ? stnData.endDate.toString().split("T")[0] : null;
    booking.value = stnData.booking;
    delivery.value = stnData.delivery;
    transshipment.value = stnData.transshipment;
    address.value = stnData.address;
    city.value = stnData.city;
    pincode.value = stnData.pincode;
    state.value = stnData.state;
    contactPerson.value = stnData.contactPerson;
    officePhoneNo.value = stnData.officePhoneNo;
    email.value = stnData.email;
    mobileNo.value = stnData.mobileNo;

}

function submitStationMaster(){
    const inputArr: Ref<string>[] = [stnCode, stnName, startDate, address, city, state, contactPerson];
    const mobileNoEle = document.getElementById('mobileNo')!;
    const pincodeEle = document.getElementById('pin')!;
    const stnCodeEle = document.getElementById('stnCode')!;
    const stnNameEle = document.getElementById('stnName')!;
    const addressEle = document.getElementById('address')!;
    const cityEle = document.getElementById('city')!;
    const stateEle = document.getElementById('state')!;
    const contactPersonEle = document.getElementById('contactPerson')!;
    const startDateEle = document.getElementById('startDate')!;
    const emailEle = document.getElementById('email')!;

    const inputEleArr: HTMLElement[] = [stnCodeEle, stnNameEle, startDateEle, addressEle, cityEle, stateEle, contactPersonEle];

    const errorArr: string[] = ["Station Code", "Station Name", "date", "address", "city", "state", "contact person's name"]

    if(validateAllStringInput(inputArr, inputEleArr, errorArr) && validatePinCode(pincode.value, pincodeEle) && validateEmail(email.value, emailEle)&& validateMobileNo(mobileNo.value, mobileNoEle) )
    {
        console.log("done");
        sendStationMasterData();
    }
    else{
        console.log("no");
        return ;
    }
}

async function sendStationMasterData(){
    try{
        const res = await $fetch('/api/stationMaster', {
            method: 'POST',
            body: { 
                stnCode: stnCode.value,
                stnName: stnName.value,
                startDate: new Date(startDate.value),
                endDate: endDate.value ? new Date(endDate.value) : endDate.value,
                booking: booking.value,
                delivery: delivery.value,
                transshipment: transshipment.value,
                address: address.value,
                city: city.value,
                pincode: pincode.value,
                state: state.value,
                contactPerson: contactPerson.value,
                officePhoneNo: officePhoneNo.value,
                email: email.value,
                mobileNo: mobileNo.value
            }
        });
        console.log(res)
    }
    catch (err){
        console.log('error: ', err!.toString())
    }
}

// function to validate pin code
function validatePinCode(pin: string, element: HTMLElement): boolean{
    // regex for checking correct format of pin code
    const regex = /^[0-9]{6}$/;
    if(pin.match(regex)){
        generateFieldsErr(element)
        return true;
    }
    const errorMsg = "Enter a valid pincode";
    generateFieldsErr(element, errorMsg);
    return false;
}

</script>

<style scoped>
.input-address > *{
    @apply mb-2;
}

@media (min-width: 660px) {
    .checkbox-container{
        @apply self-center text-[1.1rem] flex flex-col gap-4;
    }

}
</style>