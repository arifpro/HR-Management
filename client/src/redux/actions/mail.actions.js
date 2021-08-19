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
            return dispatch({
                type: mailConstants.SEND_MAIL_SUCCESS,
                payload: res.data,
            });
        }
        return dispatch({
            type: mailConstants.SEND_MAIL_FAILED,
            error: res.data.message,
        });
    } catch (e) {
        return dispatch({
            type: mailConstants.SEND_MAIL_FAILED,
            error: e,
        });
    }
};

// eslint-disable-next-line import/prefer-default-export
export { sendMail };
