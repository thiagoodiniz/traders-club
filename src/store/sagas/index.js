import {takeLatest, all } from 'redux-saga/effects'
import { Types as FormTypes } from '../actions/form'
import { Types as ListTypes} from '../actions/list'
import { getBrands, getCars } from './list'

export default function* rootSaga() {
        return yield all([
            takeLatest(FormTypes.START_ADD, getBrands),
            takeLatest(ListTypes.START_SEARCH_VEHICLES, getCars)
        ])
}