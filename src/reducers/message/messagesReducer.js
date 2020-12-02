import {
  SUCCESS_MESSAGE,
  ERROR_MESSAGE,
  CLEAR_MESSAGES,
} from "../../actions/auth/authTypes";

const initialState = {
  success: [],
  error: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ERROR_MESSAGE:
      return {
        success: [],
        error: [action.payload],
      };

    case SUCCESS_MESSAGE:
      return {
        error: [],
        success: [action.payload],
      };
    case CLEAR_MESSAGES:
      return {
        error: [],
        success: [],
      };
    default:
      return state;
  }
}
