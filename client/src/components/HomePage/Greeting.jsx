/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */
import AnalogClock from 'analog-clock-react';
import './Greeting.scss';

const Greeting = () => {
    const myDate = new Date();
    const hrs = myDate.getHours();

    let greet = 'Good ';
    if (hrs < 12) greet += 'Morning';
    else if (hrs >= 12 && hrs <= 17) greet += 'Afternoon';
    else if (hrs >= 17 && hrs <= 24) greet += 'Evening';

    const clockOptions = {
        width: '100%',
        baseColor: '#fff',
        centerColor: '#234c5e',
        handColors: {
            second: '#909090',
            minute: '#5faccd',
            hour: 'red',
        },
    };

    return (
        <div className="wrapper">
            <div className="img-area">
                <div className="inner-area">
                    <AnalogClock {...clockOptions} />
                </div>
            </div>

            <div className="name">{greet}</div>
            <div className="about">Welcome to HR-Management!</div>

            <div className="linkBtn" style={{ marginTop: '1rem' }}>
                <button
                    type="button"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '25px',
                    }}
                >
                    Add Employee(s)
                </button>
            </div>

            <div className="linkBtn" style={{ marginTop: '1rem' }}>
                <button
                    type="button"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '25px',
                    }}
                >
                    Show Employees
                </button>
            </div>
        </div>
    );
};

export default Greeting;
