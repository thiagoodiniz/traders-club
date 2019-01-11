
import { Types } from '../actions/form'

const INITIAL_STATE = {
    action: null,
    brands: [],
    vehicleToUpdate: { },
    message: null
}

export default function form(state = INITIAL_STATE, action){
        switch(action.type){
            case Types.START_ADD:
                return {
                    ...INITIAL_STATE,
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

            case Types.UPDATE_VEHICLE_SUCCESS: 
                return {
                    ...state,
                    message: 'Veículo atualizado com sucesso'
                }
            
            case Types.UPDATE_VEHICLE_FAIL:
                return {
                    ...state,
                    message: 'Ocorreu um erro ao atualizar o veículo'
                }
            
            case Types.FINISH_ADD:
                return {
                    ...INITIAL_STATE,
                    message: 'Veículo adicionado com sucesso'
                                }
            case Types.ADD_VEHICLE_FAIL: 
                return {
                    ...state,
                    message: 'Problemas ao salvar o formulario'
                }
                
            case Types.FINISH_UPDATE:
            case Types.CANCEL_UPDATE:
                return {
                    ...INITIAL_STATE
                }

            case Types.REMOVE_VEHICLE_START:
                return {
                    ...state
                }
            case Types.REMOVE_VEHICLE_SUCCESS:
                return {
                    ...state,
                    action: 'add',
                    message: 'Veículo removido com sucesso'
                }
            case Types.REMOVE_VEHICLE_FAIL:   
                return {
                    ...state,
                    message: 'Não foi possível remover o veículo'
                } 

            case Types.CLEAR_MESSAGES:
                return {
                    ...state,
                    message: null
                }    
                
            default:
                return {
                    ...state 
                }   
        }
}