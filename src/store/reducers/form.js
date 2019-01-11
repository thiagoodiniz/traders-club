
import { Types } from '../actions/form'

const INITIAL_STATE = {
    action: null,
    brands: [],
    vehicleToUpdate: { }
}

export default function form(state = INITIAL_STATE, action){
        switch(action.type){
            case Types.START_ADD:
                return {
                    ...state,
                    action: 'add'
                }
            case Types.GET_BRANDS_SUCCESS:
            case Types.GET_BRANDS_FAIL:
                return {
                    ...state,
                    brands: action.brands
                }
            case Types.START_UPDATE:
                return {
                    ...state,
                    action: 'update',
                    vehicleToUpdate: action.vehicleToUpdate
                }    
            
            case Types.FINISH_UPDATE:
            case Types.CANCEL_UPDATE:
                return {
                    ...INITIAL_STATE
                }

            default:
                return {
                    ...INITIAL_STATE 
                }   
        }
}