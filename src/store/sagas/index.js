import {takeLatest, all } from 'redux-saga/effects'
import { Types as FormTypes } from '../actions/form'
import { getBrands } from './list'

export default function* rootSaga() {
        return yield all([
            takeLatest(FormTypes.START_ADD, getBrands),
        ])
}