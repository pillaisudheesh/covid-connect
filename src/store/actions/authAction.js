import axios from "axios";
import * as types from "./actionTypes";
import { push } from "connected-react-router";
import { API_URL } from "../../contants";

// =================== LOGIN ========================
export function loginUser(data) {
  return async dispatch => {
    try {
      const payload = await axios.post(`${API_URL}/login/`, data);
      localStorage.setItem("jwt", payload.data.jwt);
      localStorage.setItem("user", JSON.stringify(payload.data.user));
      dispatch(loginUserSuccess(payload.data.user));
      dispatch(push("/appointments"));
    } catch (err) {
      dispatch(getErrorMessage(true));
    }
  };
}

export function loginUserSuccess(payload) {
  return {
    type: types.AUTH_USER,
    payload: payload,
  };
}

// ============== LOGOUT ==============================
export function logoutUser() {
  localStorage.removeItem("jwt");
  return {
    type: types.LOGOUT_USER,
  };
}

// =============== RESET PASSWORD -– NEW USER ==================
/*
export function resetPassword(data) {
  return async dispatch => {
    try {
      const payload = await axios.put(
        `${API_URL}/users/reset-password/`,
        data,
        {}
      );
      dispatch(resetPasswordSuccess());
      dispatch(push("/login"));
    } catch (e) {
      dispatch(getErrorMessage(true));
    }
  };
}
*/
export function resetPasswordSuccess() {
  return {
    type: types.RESET_PASSWORD_SUCCESS,
  };
}

export function getErrorMessage(isErrorReceived) {
  return {
    type: types.RECEIVED_ERROR,
    isErrorReceived: isErrorReceived,
  };
}