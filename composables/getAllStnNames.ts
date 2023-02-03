import { Ref } from '@vue/reactivity';

// function for getting all stn Names from stn master table
export async function callStnNamesApi(stnNames: Ref<{}[]>){
    try{
        const res = await $fetch('/api/getStationNames');
        if(res){
            stnNames.value = res
        }else{
            console.log(res)

        }
    }
    catch (err){
        console.log('error: ', err!.toString())
    }
}