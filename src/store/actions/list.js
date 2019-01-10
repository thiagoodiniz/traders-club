
export const Types = {
    ADD_VEHICLE: 'ADD_VEHICLE',
    SEARCH_VEHICLES: 'SEARCH_VEHICLES'
}

export const Creators = {
    addVehicle: (vehicle) => ({
        type: Types.ADD_VEHICLE,
        vehicle
    }),
    searchVehicles: (list) => ({
        type: Types.SEARCH_VEHICLES,
        list 
    })
}