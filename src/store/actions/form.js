
export const Types = {
    START_ADD: 'form/START_ADD',
    FINISH_ADD: 'form/FINISH_ADD',
    ADD_VEHICLE_FAIL: 'list/ADD_VEHICLE_FAIL',
    GET_BRANDS_SUCCESS: 'form/GET_BRANDS_SUCCESS',
    GET_BRANDS_FAIL: 'form/GET_BRANDS_FAIL',
    START_UPDATE: 'form/START_UPDATE',
    FINISH_UPDATE: 'form/FINISH_UPDATE',
    CANCEL_UPDATE: 'form/CANCEL_UPDATE'
}

export const Creators = {
    startAdd: () => ({
        type: Types.START_ADD
    }),
    finishAdd: (vehicle) => ({
        type: Types.FINISH_ADD,
        vehicle
    }),
    addVehicleFail: () => ({
        type: Types.ADD_VEHICLE_FAIL
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
    }),
    cancelUpdate: () => ({
        type: Types.CANCEL_UPDATE
    })
}