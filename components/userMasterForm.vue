<template>
    <div class="form-container">
        <h1 class="text-center text-[2rem] font-bold">User Master</h1>
        <form class="form">
            <div>
                <label for="stnCode">Station Code</label><br>
                <input v-model="stnCode" type="text" maxlength="3" name="stnCode" id="stnCode" required>
            </div>

            <div>
                <label for="stnName">Station Name</label><br>
                <input v-model="stnName" type="text" maxlength="100" name="stnName" id="stnName">
            </div>
            <div>
                <label for="startDate">Start Date</label><br>
                <input v-model="startDate" type="date" name="startDate" id="startDate">
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
                    <label for="address">Address</label><br>
                    <textarea v-model="address" type="text" id="address" name="address" maxlength="100" row="3" required></textarea>
                </div>  
                <div>
                    <label for="city">City</label><br>
                    <input v-model="city" type="text" id="city" name="city" maxlength="100" required>
                </div>
                <div>
                    <label for="pin">Pin Code</label><br>
                    <input v-model="pinCode" type="text" id="pin" name="pin" maxlength="6" required>
                </div>
                <div class=" overflow-scroll">
                    <label for="state">State</label><br>
                    <select v-model="state" class=" max-w-[100%]" id="state" name="state" required>
                        <option value=""></option>
                        <option v-for="state in states"
                        :value="state" :key="state">{{state}}</option>
                    </select>
                </div>
                
            </div>

            <div>
                <label for="contactPerson">Contact Person's Name</label><br>
                <input v-model="contactPerson" type="text" maxlength="50" id="contactPerson" name="contactPerson" required>
            </div>

            <div>
                <label for="officePhoneNo">Office Phone No</label><br>
                <input v-model="officePhoneNo" type="text" name="officePhoneNo" id="officePhoneNo" maxlength="10">
            </div>

            <div>
                <label for="email">Email</label><br>
                <input v-model="email" type="email" name="email" id="email" required>
            </div>

            <div>
                <label for="mobileNo">Mobile No</label><br>
                <input v-model="mobileNo" type="text" name="mobileNo" id="mobileNo" maxlength="10" required>
            </div>

            <button class="font-bold bg-[#5652cc] text-white px-4 py-2 rounded-[.5rem] text-[1rem] hover:bg-[#221cd2] submit-btn">Submit</button>

        </form>

        
    </div>
</template>

<script setup lang="ts">


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
    .checkbox-container > *{
    }
}
</style>