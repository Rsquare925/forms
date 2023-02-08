import { Ref } from '@vue/reactivity';

// function for getting all stn Names from stn master table
export async function callCategoryNamesApi(categoryNames: Ref<CategoryNames[]>){
    try{
        const res: CategoryNames[] | false = await $fetch('/api/getCategoryNames');
        if(res){
            categoryNames.value = res
        }else{
            console.log(res)

        }
    }
    catch (err){
        console.log('error: ', err!.toString())
    }
}