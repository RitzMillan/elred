import { call, put, takeEvery } from "redux-saga/effects";
import { ALL_PRODUCTS, SET_ALL_PRODUCTS } from "./constants";

function* getProducts(action) {
  let response = yield call(
    fetch,
    `https://elredtest.s3.amazonaws.com/reactAssignment/getProduct_${action.payload}.json`
  );
  let responseBody = yield response.json();
  yield put({type: SET_ALL_PRODUCTS, payload: responseBody.result})
  console.warn('product saga called', responseBody.result)
}

function* productSaga() {
  yield takeEvery(ALL_PRODUCTS, getProducts);
}

export default productSaga;
