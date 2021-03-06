import {takeLatest, all } from 'redux-saga/effects'
import { Types as FormTypes } from '../actions/form'
import { Types as ListTypes} from '../actions/list'
import { getBrands, getCars, createVehicle, removeVehicle, updateVehicle } from './list'

export default function* rootSaga() {
        return yield all([
            takeLatest(FormTypes.START_ADD, getBrands),
            takeLatest(FormTypes.START_UPDATE, getBrands),
            takeLatest(ListTypes.START_SEARCH_VEHICLES, getCars),
            takeLatest(FormTypes.FINISH_ADD, createVehicle),
            takeLatest(FormTypes.REMOVE_VEHICLE_START, removeVehicle),
            takeLatest(FormTypes.FINISH_UPDATE, updateVehicle)
        ])
}