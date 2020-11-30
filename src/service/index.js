import Service from './Service';
import apiurl from '../constants/Urls';

export const addEmployee = params => Service.postWithToken(apiurl.EMPLOYEE, params);
export const deleteEmployee = id => Service.deleteWithToken(apiurl.EMPLOYEE + "/" + id);
export const updateEmployee = (id, params) => Service.putWithToken(apiurl.EMPLOYEE + "/" + id, params);
export const getEmployee = () => Service.getWithToken(apiurl.EMPLOYEE );
export const getSelectedEmployee = id => Service.getWithToken(apiurl.EMPLOYEE + "/" + id);

