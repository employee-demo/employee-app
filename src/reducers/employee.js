import {
  EMPLOYEE_ADD_SUCCESS,
  EMPLOYEE_GET_REQUEST,
  EMPLOYEE_DELETE_SUCCESS,
  EMPLOYEE_UPDATE_SUCCESS,
  EMPLOYEE_GET_SUCCESS,
  EMPLOYEE_SELECTED_SUCCESS,
  EMPLOYEE_ACTION_FAIL
} from '../constants/ActionTypes';

const initState={
  ifRefresh: false,
  ifRedirect: false,
  ifSelect: false,
  payload: null,
  selected: null,
};

export default (state=initState, action) => {
  switch (action.type) {
    case EMPLOYEE_ADD_SUCCESS:
      return {
        ...state,
        ifRedirect: true
      };
    case EMPLOYEE_DELETE_SUCCESS:
      return {
        ...state,
        ifRefresh: !state.ifRefresh,
        ifConnect: true,
      };
    case EMPLOYEE_UPDATE_SUCCESS:
      return {
        ...state,
        ifRedirect: true,
        payload: null
      };
    case EMPLOYEE_GET_SUCCESS:
      return {
        ...state,
        ifRedirect: false,
        payload: action.data,
        selected:null
      };
      case EMPLOYEE_GET_REQUEST:
        return {
          ...state,
          payload: null,
        };
    case EMPLOYEE_SELECTED_SUCCESS:
      return {
        ...state,
       ifRedirect: false,
        selected: action.data,
      };
    case EMPLOYEE_ACTION_FAIL:
      return {
        ...state,
        ifConnect: false,
      };

    default:
      return state;
  }
};
