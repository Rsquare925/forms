import { Ref } from '@vue/reactivity';

// function for getting all stn Names from stn master table
export async function callOwnerNameApi(ownerNames: Ref<OwnerName[]>){
    try{
        const res: OwnerName[] | false = await $fetch('/api/getOwnerNames');
        if(res){
            ownerNames.value = res
        }else{
            console.log(res)

        }
    }
    catch (err){
        console.log('error: ', err!.toString())
    }
}