import {
  GET_EMPLOYEES_LIST_SUCCESS,
  SET_LOADING,
} from "../../actions/employee/employeeTypes";

const initialState = {
  employeeList: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    case GET_EMPLOYEES_LIST_SUCCESS:
      return {
        ...state,
        employeeList: action.payload,
      };

    default:
      return state;
  }
}
