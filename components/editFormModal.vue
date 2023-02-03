<template>
    <div class="center popup ">
        <ul class="font-bold">
            <li @click="editForm($event)" v-for="stn in props.stnNames" :data-code="stn.stnCode" key="stn">{{ stn.stnName }}</li>
        </ul>
    </div>
    <div class="overlay" @click="toggleOverlay"></div>
    <div>
        <button type="button"  @click="toggleOverlay" class="edit-btn w-[80%]" >Edit</button>
    </div>

    
</template>

<script setup lang="ts">
import { station_master } from '.prisma/client';
import { Ref } from '@vue/reactivity';

const props = defineProps<{stnNames?: {stnName: string, stnCode: string}[]}>();

const emit = defineEmits<{
    (e: "stnData", stnData: station_master): void;
}>();

// function selected(event: MouseEvent){
//     console.log( event.target!.classList.add("selected"))
// }

function editForm(event: MouseEvent){
    // console.log(event);
    const data: string = (event.target as HTMLElement).dataset.code!;
    if(props.stnNames){
        getStnData(data);
        return;
    }
    return;
}

async function getStnData(stnCode: string){
    try{
        const res: station_master = await $fetch('/api/getStationData', {
            method: 'POST',
            body: { 
                stnCode: stnCode
            }});
        emit('stnData', res);
    }
    catch (err){
        console.log('error: ', err!.toString())
    }
}

function toggleOverlay(){
    document.querySelector('.overlay')!.classList.toggle("open");
    document.querySelector('.popup')!.classList.toggle("open");
}

</script>



<style scoped>



li {
    @apply hover:bg-slate-300 p-1 cursor-pointer ;
}
</style>

