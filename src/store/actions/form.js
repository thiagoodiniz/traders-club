
export const Types = {
    START_ADD: 'form/START_ADD',
    FINISH_ADD: 'form/FINISH_ADD',
    ADD_VEHICLE_FAIL: 'list/ADD_VEHICLE_FAIL',
    GET_BRANDS_SUCCESS: 'form/GET_BRANDS_SUCCESS',
    GET_BRANDS_FAIL: 'form/GET_BRANDS_FAIL',
    START_UPDATE: 'form/START_UPDATE',
    FINISH_UPDATE: 'form/FINISH_UPDATE',
    UPDATE_VEHICLE_SUCCESS: 'form/UPDATE_VEHICLE_SUCCESS',
    UPDATE_VEHICLE_FAIL: 'form/UPDATE_VEHICLE_FAIL',
    CANCEL_UPDATE: 'form/CANCEL_UPDATE',
    REMOVE_VEHICLE_START: 'form/REMOVE_VEHICLE_START',
    REMOVE_VEHICLE_SUCCESS: 'form/REMOVE_VEHICLE_SUCCESS',
    REMOVE_VEHICLE_FAIL: 'form/REMOVE_VEHICLE_FAIL',
    CLEAR_MESSAGES: 'form/CLEAR_MESSAGES'
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
    finishUpdate: (vehicle) =>({
        type: Types.FINISH_UPDATE,
        vehicle
    }),
    cancelUpdate: () => ({
        type: Types.CANCEL_UPDATE
    }),
    removeVehicleStart: (id) => ({
        type: Types.REMOVE_VEHICLE_START,
        id
    }),
    removeVehicleSuccess: () => ({
        type: Types.REMOVE_VEHICLE_SUCCESS
    }),
    removeVehicleFail: () => ({
        type: Types.REMOVE_VEHICLE_FAIL
    }),
    updateVehicleSuccess: () => ({
        type: Types.UPDATE_VEHICLE_SUCCESS
    }),
    updateVehicleFail: () => ({
        type: Types.UPDATE_VEHICLE_FAIL
    }),
    clearMessages: () => ({
        type: Types.CLEAR_MESSAGES
    })

}