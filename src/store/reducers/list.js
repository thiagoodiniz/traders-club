import { Types } from '../actions/list'

const INITIAL_STATE = {
    vehicles: [],
    isFetching: false
}

export default function list( state = INITIAL_STATE, action){
    switch(action.type){
        case Types.ADD_VEHICLE:
            return {
                    vehicles: [ ...state.vehicles, {...action.vehicle}
                    ]
            }

        case Types.START_SEARCH_VEHICLES:
            return {
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

        default:
            return {
                ...state
            }    
    }
}