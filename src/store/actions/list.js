
export const Types = {
    ADD_VEHICLE_SUCCESS: 'list/ADD_VEHICLE_SUCCESS',
    START_SEARCH_VEHICLES: 'list/START_SEARCH_VEHICLES',
    GET_CARS_SUCCESS: 'list/GET_CARS_SUCCESS',
    GET_CARS_FAIL: 'list/GET_CARS_FAIL',
    FILTER_VEHICLES: 'list/FILTER_VEHICLES'
}

export const Creators = {
    addVehicleSuccess: (vehicle) => ({
        type: Types.ADD_VEHICLE_SUCCESS,
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
    }),
    filterVehicles: (filterText) => ({
        type: Types.FILTER_VEHICLES,
        filterText
    })
}