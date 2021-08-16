import Info from '../components/AboutPage/Info';
import Layout from '../components/Layout';

const About = () => (
    <Layout title="About">
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50vh',
            }}
        >
            <Info />
        </div>
    </Layout>
);

export default About;
