import * as types from '../constants/ActionTypes';


export function addEmployee(payload) {
  return {
    type: types.EMPLOYEE_ADD_REQUEST,
    payload,
  };
}
export function deleteEmployee(id) {
  return {
    type: types.EMPLOYEE_DELETE_REQUEST,
    id,
  };
}
export function updateEmployee(id, payload) {
  return {
    type: types.EMPLOYEE_UPDATE_REQUEST,
    id,
    payload,
  };
}
export function getEmployee(payload) {
  return {
    type: types.EMPLOYEE_GET_REQUEST,
    payload,
  };
}
export function selectedEmployee(id) {
  return {
    type: types.EMPLOYEE_SELECTED_REQUEST,
    id,
  };
}