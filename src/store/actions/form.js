
export const Types = {
    START_ADD: 'form/START_ADD',
    GET_BRANDS_SUCCESS: 'form/GET_BRANDS_SUCCESS',
    GET_BRANDS_FAIL: 'form/GET_BRANDS_FAIL',
    START_UPDATE: 'form/START_UPDATE',
    FINISH_UPDATE: 'form/FINISH_UPDATE' 
}

export const Creators = {
    startAdd: () => ({
        type: Types.START_ADD
    }),
    getBrandSuccess: (brands) => ({
        type: Types.GET_BRANDS_SUCCESS,
        brands
    }),
    getBrandFail: () => ({
        type: Types.GET_BRANDS_FAIL,
        brands: []
    }),
    startUpdate: (vehicle) =>({
        type: Types.START_UPDATE,
        vehicleToUpdate: vehicle
    }),
    finishUpdate: () =>({
        type: Types.FINISH_UPDATE
    })
}