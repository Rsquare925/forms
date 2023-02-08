interface GstMaster {
    nameOfParty: string,
    typeOfNumber: "mobileNo" | "panNo" | "aadhaarNo" | "gstNo",
    num: string,
    selectedStns: string[],
} 