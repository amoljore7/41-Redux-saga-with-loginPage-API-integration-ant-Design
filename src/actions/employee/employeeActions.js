import { GET_EMPLOYEES_LIST } from "./employeeTypes";

export const getEmployeeList = () => {
  return {
    type: GET_EMPLOYEES_LIST,
  };
};
