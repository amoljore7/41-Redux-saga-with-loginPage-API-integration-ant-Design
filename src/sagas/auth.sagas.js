import { put, takeLatest } from "redux-saga/effects";
import { SET_LOADING } from "../actions/employee/employeeTypes";
import {
  LOGIN,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  CURRENT_USER,
  SUCCESS_MESSAGE,
  ERROR_MESSAGE,
} from "../actions/auth/authTypes";
import Axios from "axios";

export function* userLogin({ payload }) {
  yield put({ type: SET_LOADING });
  try {
    // const user = yield Axios.post("/api/token/", payload).then(
    //   (res) => res.data
    // );
    const userData = {
      user: payload.username,
    };
    yield put({ type: LOGIN_SUCCESS, payload: userData });
    localStorage.setItem("user", JSON.stringify(userData));
    let msg = {
      id: 1,
      text: "Login successful",
    };
    yield put({ type: SUCCESS_MESSAGE, payload: msg });
  } catch (e) {
    let msg = {
      id: 1,
      text: "No active account found with the given credentials",
    };
    yield put({ type: ERROR_MESSAGE, payload: msg });
  }
  yield put({ type: SET_LOADING });
}

export function* userLogout() {
  const successMsg = {
    id: 1,
    text: "Logout successful",
  };
  localStorage.removeItem("user");
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  yield put({ type: LOGOUT_SUCCESS });
  yield put({ type: SUCCESS_MESSAGE, payload: successMsg });
}

export function* currentUser({ payload }) {
  yield put({ type: LOGIN_SUCCESS, payload: payload });
}

export function* authActionWatcher() {
  yield takeLatest(LOGIN, userLogin);
  yield takeLatest(LOGOUT, userLogout);
  yield takeLatest(CURRENT_USER, currentUser);
}
