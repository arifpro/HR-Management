import { mailConstants } from '../actionTypes';

const initialState = {
    loading: false,
    error: '',
    success: '',
};

const mailReducer = (state = initialState, action) => {
    console.log(action);
    // console.log(action.payload);

    switch (action.type) {
        // <===================> sendMail <===================>
        case mailConstants.SEND_MAIL_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case mailConstants.SEND_MAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.message,
            };
        case mailConstants.SEND_MAIL_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        default:
            return state;
    }
};

export default mailReducer;
