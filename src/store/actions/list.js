
export const Types = {
    ADD_VEHICLE: 'list/ADD_VEHICLE',
    START_SEARCH_VEHICLES: 'list/START_SEARCH_VEHICLES',
    GET_CARS_SUCCESS: 'list/GET_CARS_SUCCESS',
    GET_CARS_FAIL: 'listGET_CARS_FAIL'
}

export const Creators = {
    addVehicle: (vehicle) => ({
        type: Types.ADD_VEHICLE,
        vehicle
    }),
    startSearchVehicles: () => ({
        type: Types.START_SEARCH_VEHICLES
    }),
    getCarsSuccess: (vehicles) => ({
        type: Types.GET_CARS_SUCCESS,
        vehicles
    }),
    getCarsFail: () => ({
        type: Types.GET_CARS_FAIL,
        vehicles: []
    })
}