import Info from '../components/AboutPage/Info';
import Layout from '../components/Layout';

const About = () => {
    const name = 'About';

    return (
        <Layout title="About">
            <h1>{name} page</h1>
            <Info />
        </Layout>
    );
};

export default About;
