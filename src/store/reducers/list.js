import { Types } from '../actions/list'

const INITIAL_STATE = {
    vehicles: [],
    vehiclesToShow: [],
    isFetching: false
}

export default function list( state = INITIAL_STATE, action){
    switch(action.type){
        case Types.ADD_VEHICLE_SUCCESS:
            return {
                    ...state,
                    vehicles: [ ...state.vehicles, {...action.vehicle}
                    ]
            }

        case Types.START_SEARCH_VEHICLES:
            return {
                ...state,
                vehicles: [...state.vehicles],
                isFetching: true
            }
        
        case Types.GET_CARS_SUCCESS:
        case Types.GET_CARS_FAIL:
            return {
                ...state,
                vehicles: action.vehicles,
                isFetching: false
            }    

        case Types.FILTER_VEHICLES:
            return {
                ...state,
                vehiclesToShow: filterVehicles(action.filterText, state.vehicles)
            }    

        default:
            return {
                ...state
            }    
    }
}

function filterVehicles(filterText, list){
        if(filterText === ''){
            return []
        }
        return list.filter((item) => {
            return item.title.toUpperCase().includes(filterText.toUpperCase())
        })
}