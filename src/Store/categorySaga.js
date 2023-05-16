import { takeEvery, put, call } from "redux-saga/effects";
import { ALL_CATEGORY, SET_ALL_CATEGORY } from "./constants";

function* getCategory() {
  let response = yield call(
    fetch,
    "https://elredtest.s3.amazonaws.com/reactAssignment/getCategories.json"
  );
  let responseBody = yield response.json();
  yield put({ type: SET_ALL_CATEGORY, data: responseBody.result });
  console.warn("category saga called", responseBody.result);
}

function* categorySaga() {
  yield takeEvery(ALL_CATEGORY, getCategory);
}

export default categorySaga;
