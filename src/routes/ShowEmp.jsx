import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ShowTable from '../components/Employee/ShowTable';
import Layout from '../components/Layout';
import { getAllEmployees } from '../redux/actions';

const ShowEmp = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllEmployees());
    }, [dispatch]);

    return (
        <Layout title="ShowEmployee">
            <ShowTable />
        </Layout>
    );
};

export default ShowEmp;
