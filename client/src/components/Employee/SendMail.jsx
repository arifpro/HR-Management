/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { VscLoading } from 'react-icons/vsc';
import './AddForm.scss';
import { rows } from './ShowTable';

const styles = {
    mainSection: {
        overflow: 'hidden',
        width: '350px',
        padding: '25px',
        borderRadius: '40px',
        backgroundColor: '#ecf0f3',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
    modalField: {
        display: 'block',
        marginBottom: '1em',
        padding: '0.6em',
        minWidth: '100%',
        maxWidth: '100%',
        fontFamily: 'monospace',
        fontSize: '14px',
        outline: 'none',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '8px',
        backgroundColor: '#e0eaf9',
        boxShadow:
            'inset 2px 2px 4px rgb(56 53 85 / 30%), inset -2px -2px 4px rgb(255 255 255 / 50%), inset 0 0 100px rgb(56 53 85 / 2%)',
        lineHeight: '1.2',
        borderColor: '#e0eaf9',
    },
};

const SendMail = ({ selected }) => {
    const selectedData = selected.map((no) => rows[no - 1]);
    const initialData = {
        subject: '',
        message: '',
        loading: false,
        error: '',
    };
    const [data, setData] = useState(initialData);

    const onSendMail = () => {
        setData((oldData) => ({ ...oldData, loading: true }));
        const postData = {
            to: selectedData.map((row) => row.email),
            subject: data.subject,
            message: data.message,
        };

        console.log(postData);
        setData(initialData);
    };

    return (
        <form autoComplete="off" style={styles.mainSection}>
            <div className="form__sub-title" style={{ fontWeight: '500', letterSpacing: '1px' }}>
                Send email to selected employee(s)
            </div>
            <div className="form__fields">
                <input
                    type="text"
                    placeholder="Subject"
                    autoComplete="off"
                    style={{ ...styles.modalField, ...(data.error ? { borderColor: 'red' } : {}) }}
                    onChange={(e) => {
                        setData({ ...data, name: e.target.value, error: false });
                    }}
                />

                <textarea
                    rows="4"
                    style={{ ...styles.modalField, ...(data.error ? { borderColor: 'red' } : {}) }}
                    placeholder="Message"
                    autoComplete="off"
                    onChange={(e) => {
                        setData({ ...data, email: e.target.value, error: false });
                    }}
                />
            </div>

            <button
                type="button"
                className="main__button"
                onClick={() => onSendMail()}
                disabled={data.loading}
            >
                {data.loading && (
                    <>
                        <VscLoading className="loading__icon" />
                        <span>Sending mail...</span>
                    </>
                )}
                {!data.loading && <span>Send</span>}
            </button>
        </form>
    );
};

export default SendMail;
