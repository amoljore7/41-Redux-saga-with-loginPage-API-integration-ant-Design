import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SET_LOADING,
} from "../../actions/auth/authTypes";
const initialState = {
  loading: false,
  user: {},
  isAuthenticated: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: {},
        isAuthenticated: false,
      };

    default:
      return state;
  }
}
