import { Ref } from '@vue/reactivity';

// function for getting all stn Names from stn master table
export async function callClientNamesApi(clientNames: Ref<ClientName[]>){
    try{
        const res: ClientName[] | false = await $fetch('/api/getClientNames');
        if(res){
            clientNames.value = res
        }else{
            console.log(res)

        }
    }
    catch (err){
        console.log('error: ', err!.toString())
    }
}