import { Ref } from '@vue/reactivity';

// this function generate field validation error or remove error by removing data-error property
export function generateFieldsErr(element: HTMLElement, error?: string){
    if(!error){
        element.parentElement!.removeAttribute('data-error');
        return;
    }
    element.parentElement!.dataset.error = error;

}

// function to check any mobile no 
export function validateMobileNo(no: string, element: HTMLElement): boolean{
    // regex for checking correct format of mobile no
    const regex = /^[1-9][0-9]{9}$/;
    if(no.match(regex)){
        generateFieldsErr(element);
        return true;
    }
    const errorMsg = "Enter a valid phone no";
    generateFieldsErr(element, errorMsg);
    return false
}

// function to check all mandatory text input is empty or not except pin and mobileNo
export function validateAllStringInput(inputArr: Ref<string>[], inputEleArr: HTMLElement[], errorArr: string[]): boolean {
    for (let i=0; i<inputArr.length; i++){
        if(!validateStringInput(inputArr[i], inputEleArr[i], errorArr[i])){
            return false;
        }
    }
    return true;

}

// function to check if input is empty or not
export function validateStringInput(input: Ref<string>, inputEle: HTMLElement, error: string): boolean{
    const str = input.value.trim();
    if(str){
        generateFieldsErr(inputEle)
        input.value = str;
        return true;
    }
    input.value = "";
    const errorMsg = `Enter valid ${error}`;
    generateFieldsErr(inputEle, errorMsg);
    return false;
}

// function for checking email address
export function validateEmail(input: string, element: HTMLElement) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.match(validRegex)) {
        element.parentElement!.removeAttribute('data-error')
        generateFieldsErr(element);
        return true;
    }

    const errorMsg = "Enter a valid email";
    generateFieldsErr(element, errorMsg);
    return false;
    
}

export function validateFieldByLen(field: string, fieldEle: HTMLElement, fieldLen: number): boolean{
    const trimmedField = field.trim();
    if(trimmedField.length >= fieldLen){
        generateFieldsErr(fieldEle);
        return true;
    }
    else if(fieldLen === 15){
        const errorMsg = "GST NO should contain 15 characters.";
        generateFieldsErr(fieldEle, errorMsg);
    }
    else if(fieldLen === 12){
        const errorMsg = "Aadhaar NO should contain 12 characters.";
        generateFieldsErr(fieldEle, errorMsg);
    }
    else if(fieldLen === 10){
        const errorMsg = "Pan NO should contain 10 characters.";
        generateFieldsErr(fieldEle, errorMsg);
    }
    else if(fieldLen === 21){
        const errorMsg = "CIN NO should contain 21 characters.";
        generateFieldsErr(fieldEle, errorMsg);
    }
    return false;
    
}