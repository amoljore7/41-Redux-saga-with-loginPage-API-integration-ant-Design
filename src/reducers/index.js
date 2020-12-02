import { combineReducers } from "redux";
import employeeReducer from "./employee/employeeReducer";
import authReducer from "./auth/authReducer";
import messagesReducer from "./message/messagesReducer";

export default combineReducers({
  employee: employeeReducer,
  auth: authReducer,
  messages: messagesReducer,
});
