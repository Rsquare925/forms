<template>
    <div class="form-container">
        <h1 class="text-center text-[2rem] font-bold">User Master</h1>
        <form class="form">
            <div>
                <label for="stnCode">Station Code*</label><br>
                <input v-model="stnCode" type="text" maxlength="3" name="stnCode" id="stnCode" required>
            </div>

            <div>
                <label for="stnName">Station Name</label><br>
                <input v-model="stnName" type="text" maxlength="100" name="stnName" id="stnName">
            </div>
            <div>
                <label for="startDate">Start Date*</label><br>
                <input v-model="startDate" type="date" name="startDate" id="startDate" required>
            </div>

            <div>
                <label for="endDate">End Date</label><br>
                <input v-model="endDate" type="date" name="endDate" id="endDate">
            </div>
            <div class="checkbox-container my-4">
                <div>
                    <input v-model="booking" type="checkbox" name="booking" id="booking" class="mr-1">
                    <label for="booking">Booking</label>
                </div>
                <div>
                    <input v-model="delivery" type="checkbox" name="delivery" id="delivery" class="mr-1">
                    <label for="delivery">Delivery</label>
                </div>
                <div>
                    <input v-model="transshipment" type="checkbox" name="transshipment" id="transshipment" class="mr-1">
                    <label for="transshipment">Transshipment</label>
                </div>
            </div>

            <div class="input-address">
                <div>
                    <label for="address">Address*</label><br>
                    <textarea v-model="address" type="text" id="address" name="address" maxlength="100" row="3" required></textarea>
                </div>  
                <div>
                    <label for="city">City*</label><br>
                    <input v-model="city" type="text" id="city" name="city" maxlength="100" required>
                </div>
                <div>
                    <label for="pin">Pin Code*</label><br>
                    <input v-model="pinCode" type="text" id="pin" name="pin" maxlength="6" required>
                </div>
                <div class="">
                    <label for="state">State*</label><br>
                    <select v-model="state" class=" max-w-[100%]" id="state" name="state" required>
                        <option value=""></option>
                        <option v-for="state in states"
                        :value="state" :key="state">{{state}}</option>
                    </select>
                </div>
                
            </div>

            <div>
                <label for="contactPerson">Contact Person's Name*</label><br>
                <input v-model="contactPerson" type="text" maxlength="50" id="contactPerson" name="contactPerson" required>
            </div>

            <div>
                <label for="officePhoneNo">Office Phone No</label><br>
                <input v-model="officePhoneNo" type="text" name="officePhoneNo" id="officePhoneNo" maxlength="10">
            </div>

            <div>
                <label for="email">Email*</label><br>
                <input v-model="email" type="email" name="email" id="email" required>
            </div>

            <div>
                <label for="mobileNo">Mobile No*</label><br>
                <input v-model="mobileNo" type="text" name="mobileNo" id="mobileNo" maxlength="10" required>
            </div>

            <button class="font-bold bg-[#5652cc] text-white px-4 py-2 rounded-[.5rem] text-[1rem] hover:bg-[#221cd2] submit-btn" @click.prevent="submitUserMaster($event)">Submit</button>

        </form>

        
    </div>
</template>

<script setup lang="ts">
import { Ref } from '@vue/reactivity';



const states: string[] = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep", "Delhi", "Puducherry", "Jammu and Kashmir", "Ladakh",
]

const stnCode = ref("");
const stnName = ref("");
const startDate = ref("");
const endDate = ref("");
const booking = ref(false);
const delivery = ref(false);
const transshipment = ref(false);
const address = ref("");
const city = ref("");
const pinCode = ref("");
const state = ref("");
const contactPerson = ref("");
const officePhoneNo = ref("");
const email = ref("");
const mobileNo = ref("");

function submitUserMaster(event: MouseEvent){
    const inputArr: Ref<string>[] = [stnCode, startDate, address, city, state, contactPerson];
    const mobileNoEle = document.getElementById('mobileNo')!;
    const pinCodeEle = document.getElementById('pin')!;
    const stnCodeEle = document.getElementById('stnCode')!;
    const addressEle = document.getElementById('address')!;
    const cityEle = document.getElementById('city')!;
    const stateEle = document.getElementById('state')!;
    const contactPersonEle = document.getElementById('contactPerson')!;
    const startDateEle = document.getElementById('startDate')!;
    const emailEle = document.getElementById('email')!;

    const inputEleArr: HTMLElement[] = [stnCodeEle, startDateEle, addressEle, cityEle, stateEle, contactPersonEle];
    const errorArr: string[] = ["Station Code", "date", "address", "city", "state", "contact person's name"]

    if(validateAllStringInput(inputArr, inputEleArr, errorArr) && validatePinCode(pinCode.value, pinCodeEle) && validateEmail(email.value, emailEle)&& validateMobileNo(mobileNo.value, mobileNoEle) )
    {
        console.log("done");
        sendUserMasterData();
    }
    else{
        console.log("no");
        return ;
    }
}

async function sendUserMasterData(){
    try{
        const res = await $fetch('/api/user-master', {
            method: 'POST',
            body: { 
                stnCode,
                stnName,
                startDate,
                endDate,
                booking,
                delivery,
                transshipment,
                address,
                city,
                pinCode,
                state,
                contactPerson,
                officePhoneNo,
                email,
                mobileNo
            }
        });
        console.log(res)
    }
    catch (err){
        console.log('error: ', err!.toString())
    }
}

// function to check any mobile no 
function validateMobileNo(no: string, element: HTMLElement): boolean{
    // regex for checking correct format of mobile no
    const regex = /^[1-9][0-9]{9}$/;
    if(no.match(regex)){
        element.parentElement!.removeAttribute('data-error');
        return true;
    }
    element.parentElement!.dataset.error = "Enter a valid phone no";
    return false
}

// function to validate pin code
function validatePinCode(pin: string, element: HTMLElement): boolean{
    // regex for checking correct format of pin code
    const regex = /^[0-9]{6}$/;
    if(pin.match(regex)){
        element.parentElement!.removeAttribute('data-error')
        return true;
    }
    element.parentElement!.dataset.error = "Enter a valid pincode";
    return false;
}

// function to check all mandatory text input is empty or not except pin and mobileNo
function validateAllStringInput(inputArr: Ref<string>[], inputEleArr: HTMLElement[], errorArr: string[]): boolean {
    for (let i=0; i<inputArr.length; i++){
        if(!validateStringInput(inputArr[i], inputEleArr[i], errorArr[i])){
            return false;
        }
    }
    return true;

}

// function to check if input is empty or not
function validateStringInput(input: Ref<string>, inputEle: HTMLElement, error: string): boolean{
    const str = input.value.trim();
    if(str){
        inputEle.parentElement?.removeAttribute('data-error');
        input.value = str;
        return true;
    }
    input.value = "";
    inputEle.parentElement!.dataset.error = `Enter valid ${error}`;
    return false;
}

// function for checking email address
function validateEmail(input: string, element: HTMLElement) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.match(validRegex)) {
        element.parentElement!.removeAttribute('data-error')
        return true;
    }
    element.parentElement!.dataset.error = "Enter a valid email";
    return false;
    
}



</script>

<style scoped>

h1 {
    border-bottom: 1px solid rgb(212, 209, 209);
}
.input-address > *{
    @apply mb-2;
}

.form {
    @apply justify-center;
}

.submit-btn{
    @apply mt-4;
}


@media (min-width: 660px) {
    .checkbox-container{
        @apply self-center text-[1.1rem] flex flex-col gap-4;
    }

}
</style>