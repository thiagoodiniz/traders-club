
import { Types } from '../actions/form'

const INITIAL_STATE = {
    brands: []
}

export default function form(state = INITIAL_STATE, action){
        switch(action.type){
            case Types.START_ADD:
                return state

            case Types.GET_BRANDS_SUCCESS:
            case Types.GET_BRANDS_FAIL:
                return {
                    brands: action.brands
                }
            default:
                return state    
        }
}