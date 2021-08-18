import api from '../redux.config';
import { mailConstants } from '../actionTypes';

// <===================> POST: sendMail <===================>
const sendMail = (data) => async (dispatch) => {
    try {
        dispatch({
            type: mailConstants.SEND_MAIL_REQUEST,
        });

        const { to, subject, message } = data;
        const newMail = { to, subject, message };
        console.log('sendMail data', newMail);

        const res = await api.post(`/api/v1/mail/send`, newMail);

        if (res.status === 200) {
            dispatch({
                type: mailConstants.SEND_MAIL_SUCCESS,
                payload: res.data,
            });
        } else {
            dispatch({
                type: mailConstants.SEND_MAIL_FAILED,
                error: res.data.message,
            });
        }
    } catch (e) {
        dispatch({
            type: mailConstants.SEND_MAIL_FAILED,
            error: e,
        });
    }
};

// eslint-disable-next-line import/prefer-default-export
export { sendMail };
