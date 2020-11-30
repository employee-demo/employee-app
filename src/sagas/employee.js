/*
|--------------------------------------------------
| Service template for create service layer
| service layer is power by redux-saga, which provide side effects for redux
|--------------------------------------------------
*/

import {addEmployee, deleteEmployee, updateEmployee, getEmployee,getSelectedEmployee} from '../service';
import {all, call, put, takeLatest} from 'redux-saga/effects';
import * as actionTypes from '../constants/ActionTypes';

export function* addEmployeeSaga(action) {
  try {
    const payload=yield call(addEmployee, action.payload);
    yield put({
      type: actionTypes.EMPLOYEE_ADD_SUCCESS,
      data: payload,
    });
  } catch (err) {
    yield put({
      type: actionTypes.EMPLOYEE_ACTION_FAIL,
    });
  }
}
export function* deleteEmployeeSaga(action) {
  try {
    const payload=yield call(deleteEmployee, action.id);
    yield put({
      type: actionTypes.EMPLOYEE_DELETE_SUCCESS,
      data: payload,
    });
  } catch (err) {
    console.log(err)
    yield put({
      type: actionTypes.EMPLOYEE_ACTION_FAIL,
    });
  }
}
export function* updateEmployeeSaga(action) {
  try {
    const payload=yield call(updateEmployee, action.id, action.payload);
    yield put({
      type: actionTypes.EMPLOYEE_UPDATE_SUCCESS,
      data: payload,
    });
  } catch (err) {
    console.log(err)
    yield put({
      type: actionTypes.EMPLOYEE_ACTION_FAIL,
    });
  }
}
export function* getEmployeeSaga() {
  try {
    const payload=yield call(getEmployee);
    yield put({
      type: actionTypes.EMPLOYEE_GET_SUCCESS,
      data: payload,
    });
  } catch (err) {
    yield put({
      type: actionTypes.EMPLOYEE_ACTION_FAIL,
    });
  }
}

export function* getSelectedEmployeeSaga(action) {
  try {
    const payload=yield call(getSelectedEmployee,action.id);
    yield put({
      type: actionTypes.EMPLOYEE_SELECTED_SUCCESS, 
      data: payload,
    });
  } catch (err) {

    yield put({
      type: actionTypes.EMPLOYEE_ACTION_FAIL,
    });
  }
}



function* index(): Generator<any, any, any> {
  yield all([
    takeLatest(actionTypes.EMPLOYEE_ADD_REQUEST, addEmployeeSaga),
    takeLatest(actionTypes.EMPLOYEE_DELETE_REQUEST, deleteEmployeeSaga),
    takeLatest(actionTypes.EMPLOYEE_UPDATE_REQUEST, updateEmployeeSaga),
    takeLatest(actionTypes.EMPLOYEE_GET_REQUEST, getEmployeeSaga),
    takeLatest(actionTypes.EMPLOYEE_SELECTED_REQUEST, getSelectedEmployeeSaga),
  ]);
}
export default index;