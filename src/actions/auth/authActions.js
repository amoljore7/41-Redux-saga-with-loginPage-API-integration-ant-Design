import { LOGIN, LOGOUT, CURRENT_USER } from "./authTypes";

export const userLogin = (user) => {
  return {
    type: LOGIN,
    payload: user,
  };
};

export const userLogout = () => {
  return {
    type: LOGOUT,
  };
};

export const currentUser = (user) => {
  return {
    type: CURRENT_USER,
    payload: user,
  };
};
