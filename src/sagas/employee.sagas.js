import { put, takeLatest } from "redux-saga/effects";
import {
  GET_EMPLOYEES_LIST,
  GET_EMPLOYEES_LIST_SUCCESS,
  GET_EMPLOYEES_LIST_FAIL,
  SET_LOADING,
} from "../actions/employee/employeeTypes";
import Axios from "axios";
import { SUCCESS_MESSAGE, ERROR_MESSAGE } from "../actions/auth/authTypes";

export function* getEmployeeList() {
  yield put({ type: SET_LOADING });

  try {
    const employeeList = yield Axios.get(`http://demo3749725.mockable.io`).then(
      (res) => res.data
    );
    yield put({ type: GET_EMPLOYEES_LIST_SUCCESS, payload: employeeList });
  } catch (err) {
    yield put({ type: GET_EMPLOYEES_LIST_FAIL, payload: err.response.data });
    let msg = {
      id: 1,
      text: "Failed to process request",
    };
    yield put({ type: ERROR_MESSAGE, payload: msg });
  }
  yield put({ type: SET_LOADING });
}

export function* employeeActionWatcher() {
  yield takeLatest(GET_EMPLOYEES_LIST, getEmployeeList);
}
