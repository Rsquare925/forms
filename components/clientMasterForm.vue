<template>
    
    <div class="form-container">
        <h1 class="text-center text-[2rem] font-bold">CLIENT MASTER</h1>
        <form class="form">
            <div>
                <label for="name">NAME*</label><br>
                <input v-model="name" type="text" maxlength="199" name="name" id="name" class="" required> 
            </div>
            <div>
                <label for="printName">PRINT NAME*</label><br>
                <input v-model="printName" type="text" maxlength="199" name="printName" id="printName" class="" required>
            </div>

            <div class="mt-2">
                    <label for="categoryGroup">CLIENT GROUP*</label><br>
                    <select v-model="clientGroup" class="min-w-[165px] mt-1" id="clientGroup" name="clientGroup" required>
                        <option value="" ></option>
                        <option v-for="client, index in clientNames" :value="client.name" :key="index">{{client.name}}</option>
                    </select>
            </div>

            <div class="mt-2">
                    <label for="categoryGroup">CATEGORY GROUP*</label><br>
                    <select v-model="categoryGroup" class="min-w-[180px] mt-1" id="categoryGroup" name="categoryGroup" required>
                        <option value="" ></option>
                        <option v-for="category, index in categoryNames" :value="category.categoryName" :key="index">{{category.categoryName}}</option>
                    </select>
            </div>

            <div class="mt-2">
                    <label for="clientStn">CLIENT STATION*</label><br>
                    <select v-model="clientStn" class="min-w-[165px] mt-1" id="clientStn" name="clientStn" required>
                        <option value="" ></option>
                        <option v-for="stn, index in stnNames" :value="stn.stnName" :key="index">{{stn.stnName}}</option>
                    </select>
            </div>

            <div class="mt-2">
                <label for="contactPerson">CONTACT PERSON*</label><br>
                <input v-model="contactPerson" type="text" maxlength="149" id="contactPerson" name="contactPerson" required>
            </div>
            

            <div class="input-address">
                <div>
                    <label for="address">ADDRESS*</label><br>
                    <textarea v-model="address" type="text" id="address" name="address" maxlength="190" row="3" required></textarea>
                </div>  
                <div>
                    <label for="city">CITY*</label><br>
                    <input v-model="city" type="text" id="city" name="city" maxlength="100" required>
                </div>
                
            </div>

            <div class="vertical-center">
                <label for="mobileNo">MOBILE NO*</label><br>
                <input v-model="mobileNo" type="text" name="mobileNo" id="mobileNo" maxlength="10" required>
            </div>

            <div>
                <label for="email">EMAIL*</label><br>
                <input v-model="email" type="email" name="email" id="email" required>
            </div>

            <div>
                <label for="cinNo">CIN NO*</label><br>
                <input v-model="cinNo" type="text" name="cinNo" id="cinNo" maxlength="21" required>
            </div>

            <div>
                <label for="panNo">PAN NO*</label><br>
                <input v-model="panNo" type="text" name="panNo" id="panNo" maxlength="10" required>
            </div>

            

            <div>
                <label for="dueDays">DUE DAYS</label><br>
                <input v-model="dueDays" type="number" name="dueDays" id="dueDays" min="0" placeholder="0" required>
            </div>

            <div>
                <label for="openingBalance">OPENING BALANCE</label><br>
                <input v-model="openingBalance" type="number" step="0.01" name="openingBalance" id="openingBalance" min="0" placeholder="0.00" required>
            </div>

            

            <div>
                <label for="reportingTo">REPORTING TO</label><br>
                <input v-model="reportingTo" type="text" name="reportingTo" id="reportingTo" maxlength="200">
            </div>

            <div>
                <label for="outstandingAt">OUTSTANDING AT</label><br>
                <input v-model="outstandingAt" type="text" name="outstandingAt" id="outstandingAt" maxlength="200">
            </div>

            <div>
                <label for="restartDate">RESTART DATE*</label><br>
                <input v-model="restartDate" type="date" name="restartDate" id="restartDate" required>
            </div>


            <div class="billing input-address">
                <div>
                    <label for="billingAddress">BILLING ADDRESS*</label><br>
                    <textarea v-model="billingAddress" type="text" id="billingAddress" name="billingAddress" maxlength="190" row="3" required></textarea>
                </div>  
                <div>
                    <label for="billingCity">BILLING CITY*</label><br>
                    <input v-model="billingCity" type="text" id="billingCity" name="billingCity" maxlength="100" required>
                </div>
                
            </div>

            <div class="vertical-center">
                <label for="gst">GST NO*</label><br>
                <input v-model="gstNo" type="text" name="gstNo" id="gstNo" maxlength="15" required>
            </div>

            <div class="">
                    <label for="state">CLIENT TYPE*</label><br>
                    <select v-model="clientType" class=" min-w-[180px]" id="clientType" name="clientType" required>
                        <option value=""></option>
                        <option value="1-TOPAY">1-TOPAY</option>
                        <option value="2-PAID">2-PAID</option>
                        <option value="3-TBB">3-TBB</option>

                    </select>
                </div>
            
            <div>
                <button class="submit-btn w-[80%]" @click.prevent="submitClientMaster()">Submit</button>
            </div>

        </form>

        
    </div>
</template>

<script setup lang="ts">
import { Ref } from '@vue/reactivity';

const name = ref("");
const printName = ref("");
const clientGroup: Ref<string | null> = ref(null);
const categoryGroup = ref("");
const clientStn = ref("");
const contactPerson = ref("");
const address = ref("");
const city = ref("");
const mobileNo = ref("");
const email = ref("");
const cinNo = ref("");
const panNo = ref("");
const dueDays = ref();
const openingBalance = ref();
const reportingTo = ref("");
const outstandingAt = ref("");
const restartDate : Ref<string | null> = ref(null);
const billingAddress = ref("");
const billingCity = ref("");
const gstNo = ref("");
const clientType = ref("");

const stnNames: Ref<StnNames[]> = ref([]);
const categoryNames: Ref<CategoryNames[]> = ref([]);
const clientNames: Ref<ClientName[]> = ref([]);

callStnNamesApi(stnNames);
callCategoryNamesApi(categoryNames);
callClientNamesApi(clientNames);

function submitClientMaster(){
    const inputArr: Ref<string>[] = [name, printName, categoryGroup, clientStn, contactPerson, address, city, reportingTo, outstandingAt, billingAddress, billingCity, clientType];
    const nameEle = document.getElementById('name')!;
    const printNameEle = document.getElementById('printName')!;
    const categoryGroupEle = document.getElementById('categoryGroup')!;
    const clientStnEle = document.getElementById('clientStn')!;
    const contactPersonEle = document.getElementById('contactPerson')!;
    const addressEle = document.getElementById('address')!;
    const cityEle = document.getElementById('city')!;
    const reportingToEle = document.getElementById('reportingTo')!;
    const outstandingAtEle = document.getElementById('outstandingAt')!;
    const billingAddressEle = document.getElementById('billingAddress')!;
    const billingCityEle = document.getElementById('billingCity')!;
    const clientTypeEle = document.getElementById('clientType')!;

    const mobileNoEle = document.getElementById('mobileNo')!;
    const emailEle = document.getElementById('email')!;
    const panNoEle = document.getElementById('panNo')!;
    const cinNoEle = document.getElementById('cinNo')!;
    const gstNoEle = document.getElementById('gstNo')!;

    const inputEleArr: HTMLElement[] = [nameEle, printNameEle, categoryGroupEle, clientStnEle, contactPersonEle, addressEle, cityEle, reportingToEle, outstandingAtEle, billingAddressEle, billingCityEle, clientTypeEle ];

    const errorArr: string[] = ["Name", "Print Name", "Category Group", "Client Station", "contact person's name", "address", "city", "value", "value", "billing address", "billing city", "client type" ]

    if(validateAllStringInput(inputArr, inputEleArr, errorArr) && validateMobileNo(mobileNo.value, mobileNoEle) && validateEmail(email.value, emailEle) && validateFieldByLen(cinNo.value, cinNoEle, 21) && validateFieldByLen(panNo.value, panNoEle, 10) && validateFieldByLen(gstNo.value, gstNoEle, 15))
    {
        console.log("done");
        sendClientMasterData();
    }
    else{
        console.log("no");
        return ;
    }
}

async function sendClientMasterData(){
    try{
        const res = await $fetch('/api/clientMaster', {
            method: 'POST',
            body: { 
                name: name.value,               
                printName: printName.value,
                clientGroup: clientGroup.value,
                categoryGroup: categoryGroup.value,
                clientStn: clientStn.value,
                contactPerson: contactPerson.value,
                address: address.value,
                city: city.value,
                mobileNo: mobileNo.value,
                email: email.value,
                cinNo: cinNo.value,
                panNo: panNo.value,
                dueDays: dueDays.value ? dueDays.value : 0,
                openingBalance: openingBalance.value ? openingBalance.value : 0.00,
                reportingTo: reportingTo.value,
                outstandingAt: outstandingAt.value,
                restartDate: restartDate.value ? new Date(restartDate.value) : restartDate.value,
                billingAddress: billingAddress.value,
                billingCity: billingCity.value,
                gstNo: gstNo.value,
                clientType: clientType.value
            }
        });
        console.log(res)
    }
    catch (err){
        console.log('error: ', err!.toString())
    }
}

</script>

<style scoped>
@media (min-width: 660px) {
    .vertical-center{
        @apply self-center ;
    }

}
</style>