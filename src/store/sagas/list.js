import { call, put } from 'redux-saga/effects'
import { services } from '../../services'
import { Creators as FormActions } from '../actions/form'
import { Creators as ListActions } from '../actions/list'

export function* getBrands(){
    try{
        const brands = yield call(services.getBrandsRequest)
        yield put(FormActions.getBrandSuccess(brands))
    } catch(err){
        console.log(err)
        yield put(FormActions.getBrandFail([]))
    }
} 

export function* getCars(){
    try{
        const vehicles = yield call(services.searchVehiclesRequest)
        yield put(ListActions.getCarsSuccess(vehicles))
    }catch(err){
        console.log(err)
        yield put(ListActions.getCarsFail([]))
    }
}

export function* createVehicle(action){
        try{
            const vehicleWithId = yield call(services.createVehicleRequest, action.vehicle)
            yield put(ListActions.addVehicleSuccess(vehicleWithId))
        }catch(err){
            console.log(err)
            yield put(FormActions.addVehiclefail())
        }
}

export function* removeVehicle (action){
    try{
        const response = yield call(services.removeVehicleRequest, action.id)
        if(response.status === 204){
            yield put(FormActions.removeVehicleSuccess())
        }else{
            yield put(FormActions.removeVehicleFail())
        }
    }catch(err){
        console.log(err)
        yield put(FormActions.removeVehicleFail())
    }
}