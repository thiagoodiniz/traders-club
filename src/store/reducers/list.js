import { Types } from '../actions/list'

const INITIAL_STATE = {
    vehicles: []
}

export default function list( state = INITIAL_STATE, action){

    switch(action.type){
        case Types.ADD_VEHICLE:
            return {
                    vehicles: [ ...state.vehicles, {...action.vehicle}
                    ]
            }

        default:
            return {
                ...state
            }    
    }
}