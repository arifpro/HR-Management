import { useEffect, useState } from 'react';
import { IoMail, IoPerson } from 'react-icons/io5';
import { VscLoading } from 'react-icons/vsc';
import Modal from 'react-modal';
import './style.scss';

const isString = (input) => {
    if (Object.prototype.toString.call(input) === '[object String]') return true;
    return false;
};

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: 'none',
        background: 'transparent',
    },
};

const Account = (props) => {
    const { viewLoginModal, setViewLoginModal } = props;

    return (
        <Modal
            isOpen={viewLoginModal}
            onRequestClose={() => setViewLoginModal(false)}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <LoginDiv setViewLoginModal={setViewLoginModal} closeBtn />
        </Modal>
    );
};

export const LoginDiv = () => {
    // login
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        error: false,
        loading: false,
    });

    useEffect(() => console.log(data), [data]);

    const formSubmit = async () => {
        setData({ ...data, loading: true });
        try {
            let responseData;

            if (responseData?.error) {
                console.log(responseData.error);
                setData({
                    ...data,
                    loading: false,
                    error: isString(responseData?.error)
                        ? responseData?.error
                        : { ...responseData?.error },
                    password: '',
                    cPassword: '',
                });
            } else if (responseData?.token) {
                setData({
                    name: '',
                    email: '',
                    password: '',
                    cPassword: '',
                    loading: false,
                    error: false,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="">
            <form autoComplete="off" className="mainSection">
                <div className="navbar__logo" />
                <div className="navbar__title">Add Employee Form</div>
                <div className="navbar__sub-title">Please fill all required fields!</div>
                <div className="navbar__fields">
                    <div className="navbar__username">
                        <IoPerson />
                        <input
                            // type="text"
                            placeholder="First name"
                            autoComplete="off"
                            onChange={(e) => {
                                setData({ ...data, name: e.target.value, error: false });
                            }}
                        />
                    </div>

                    <div className="navbar__username">
                        <IoPerson />
                        <input
                            type="text"
                            placeholder="Last name"
                            autoComplete="off"
                            onChange={(e) => {
                                setData({ ...data, name: e.target.value, error: false });
                            }}
                        />
                    </div>

                    <div className="navbar__username">
                        <IoMail />
                        <input
                            type="email"
                            placeholder="Email address"
                            autoComplete="off"
                            onChange={(e) => {
                                setData({ ...data, email: e.target.value, error: false });
                            }}
                        />
                    </div>

                    {/* {!data.error ? (
                        ''
                    ) : (
                        <p
                            style={{
                                marginBottom: '1rem',
                                textAlign: 'center',
                                color: '#e82603',
                                fontWeight: 'bold',
                            }}
                        >
                            {isString(data?.error) ? data.error : data.error[0]}
                        </p>
                    )} */}
                </div>

                <button
                    type="button"
                    className="navbar__signin-button"
                    onClick={() => formSubmit()}
                    disabled={data.loading}
                >
                    {data.loading && (
                        <>
                            <VscLoading className="loading__icon" />
                            <span>Adding employee...</span>
                        </>
                    )}
                    {!data.loading && <span>Submit</span>}
                </button>
            </form>
        </div>
    );
};

export default Account;
