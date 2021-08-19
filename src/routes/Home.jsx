import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Greeting from '../components/HomePage/Greeting';
import Layout from '../components/Layout';
import { getAllEmployees } from '../redux/actions';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllEmployees());
    }, [dispatch]);

    return (
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
};

export default Home;
