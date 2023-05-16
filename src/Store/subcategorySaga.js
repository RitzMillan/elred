import { call, put, takeEvery } from "redux-saga/effects";
import { SET_SUB_CATEGORY, SUB_CATEGORY } from "./constants";

function* getSubcategory(action) {
  let response = yield call(
    fetch,
    `https://elredtest.s3.amazonaws.com/reactAssignment/getSubCategory_${action.payload}.json`
  );
  let responseBody = yield response.json();
  yield put({type: SET_SUB_CATEGORY, payload: responseBody.result});
  console.warn("subcategory saga called", responseBody.result);
}

function* subcategorySaga() {
  yield takeEvery(SUB_CATEGORY, getSubcategory);
}

export default subcategorySaga;