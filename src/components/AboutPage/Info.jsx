import reactLogo from '../../assets/images/react-logo.png';
import styles from '../../styles/InfoStyles.module.scss';

const Info = () => (
    <main className={styles.home}>
        <a
            href="http://thetechdevs.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.home__logo}
        >
            <img
                loading="lazy" // Image Optimize by lazy loading
                src={reactLogo}
                alt="React Logo"
                className={styles.home__reactLogo}
            />
        </a>
    </main>
);

export default Info;
