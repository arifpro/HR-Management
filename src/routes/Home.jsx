import Greeting from '../components/HomePage/Greeting';
import Layout from '../components/Layout';

const Home = () => (
    <Layout title="Home">
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <Greeting />
        </div>
    </Layout>
);
export default Home;
