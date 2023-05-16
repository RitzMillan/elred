import { fork, spawn } from "redux-saga/effects";
import categorySaga from './categorySaga'
import subcategorySaga from './subcategorySaga'
import productSaga from "./productSaga";

function* rootSaga () {
    yield spawn(categorySaga)
    yield spawn(subcategorySaga)
    yield spawn(productSaga)

}

export default rootSaga;