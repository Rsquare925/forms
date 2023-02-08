interface StnMaster {
    stnCode: string
    stnName: string
    startDate: string
    endDate: string | null
    booking: boolean
    delivery: boolean
    transshipment: boolean
    address: string
    city: string
    state: string
    pincode: string
    contactPerson: string
    officePhoneNo: string | null
    email: string
    mobileNo: string
} 