import api from '../redux.config';
import { employeeConstants } from '../actionTypes';

// <===================> GET: getAllEmployees <===================>
const getAllEmployees = () => async (dispatch) => {
    try {
        dispatch({
            type: employeeConstants.GET_ALL_EMPLOYEE_REQUEST,
        });

        const res = await api.get(`/api/v1/employee/get-all`);

        if (res.status === 200) {
            dispatch({
                type: employeeConstants.GET_ALL_EMPLOYEE_SUCCESS,
                payload: res.data,
            });
        } else {
            dispatch({
                type: employeeConstants.GET_ALL_EMPLOYEE_FAILED,
                error: res.data.message,
            });
        }
    } catch (e) {
        dispatch({
            type: employeeConstants.GET_ALL_EMPLOYEE_FAILED,
            error: e,
        });
    }
};

// <===================> POST: addSingleEmployee <===================>
const addSingleEmployee = (data) => async (dispatch) => {
    try {
        dispatch({
            type: employeeConstants.ADD_SINGLE_EMPLOYEE_REQUEST,
        });

        const { firstName, lastName, email } = data;
        const newEmployee = { firstName, lastName, email };

        const res = await api.post(`/api/v1/employee/add`, newEmployee);

        if (res.status === 201) {
            return dispatch({
                type: employeeConstants.ADD_SINGLE_EMPLOYEE_SUCCESS,
                payload: res.data,
            });
        }
        return dispatch({
            type: employeeConstants.ADD_SINGLE_EMPLOYEE_FAILED,
            error: res.data.message,
        });
    } catch (e) {
        return dispatch({
            type: employeeConstants.ADD_SINGLE_EMPLOYEE_FAILED,
            error: e,
        });
    }
};

// <===================> POST: addMultipleEmployees <===================>
const addMultipleEmployees = (data) => async (dispatch) => {
    try {
        dispatch({
            type: employeeConstants.ADD_MULTIPLE_EMPLOYEES_REQUEST,
        });

        const { employees } = data;
        const newEmployees = { employees };

        const res = await api.post(`/api/v1/employee/add-multiple`, newEmployees);

        if (res.status === 200) {
            return dispatch({
                type: employeeConstants.ADD_MULTIPLE_EMPLOYEES_SUCCESS,
                payload: res.data,
            });
        }
        return dispatch({
            type: employeeConstants.ADD_MULTIPLE_EMPLOYEES_FAILED,
            error: res.data.message,
        });
    } catch (e) {
        return dispatch({
            type: employeeConstants.ADD_MULTIPLE_EMPLOYEES_FAILED,
            error: e,
        });
    }
};

export { getAllEmployees, addSingleEmployee, addMultipleEmployees };
