/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */
import AnalogClock from 'analog-clock-react';
import { Link } from 'react-router-dom';
import styles from '../../styles/GreetingStyles.module.scss';

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
        <div className={styles.wrapper}>
            <div className={styles.outArea}>
                <div className={styles.innerArea}>
                    <AnalogClock {...clockOptions} />
                </div>
            </div>

            <div className={styles.name}>{greet}</div>
            <div className={styles.about}>Welcome to HR-Management!</div>

            <Link to="/addEmp" className={styles.linkBtn}>
                <button type="button">Add Employee(s)</button>
            </Link>

            <Link to="/showEmp" className={styles.linkBtn}>
                <button type="button">Show Employees</button>
            </Link>
        </div>
    );
};

export default Greeting;
