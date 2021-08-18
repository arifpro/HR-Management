import { employeeConstants } from '../actionTypes';

const initialState = {
    loading: false,
    error: '',
    success: '',
    employeeData: [],
};

const employeeReducer = (state = initialState, action) => {
    console.log(action);
    // console.log(action.payload);

    switch (action.type) {
        // <===================> getAllEmployees <===================>
        case employeeConstants.GET_ALL_EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case employeeConstants.GET_ALL_EMPLOYEE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.message,
                employeeData: action.payload.data,
            };
        case employeeConstants.GET_ALL_EMPLOYEE_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        // <===================> addSingleEmployee <===================>
        case employeeConstants.ADD_SINGLE_EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case employeeConstants.ADD_SINGLE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.message,
                employeeData: [...state.employeeData, action.payload.data],
            };
        case employeeConstants.ADD_SINGLE_EMPLOYEE_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        // <===================> addMultipleEmployees <===================>
        case employeeConstants.ADD_MULTIPLE_EMPLOYEES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case employeeConstants.ADD_MULTIPLE_EMPLOYEES_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.success,
                employeeData: [...state.employeeData, ...action.payload.data],
            };
        case employeeConstants.ADD_MULTIPLE_EMPLOYEES_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        default:
            return state;
    }
};

export default employeeReducer;
