import { call, put } from 'redux-saga/effects'
import { services } from '../../services'
import { Creators as FormActions } from '../actions/form'

export function* getBrands(){
    try{
        const brands = yield call(services.getBrands)
        yield put(FormActions.getBrandSuccess(brands))
    } catch(err){
        console.log(err)
        yield put(FormActions.getBrandFailure([]))
    }
} 