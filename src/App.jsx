import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loading from './components/Loading/Loading';

// routes (Code Splitting and Pre-fetching)
const About = lazy(() => import(/* webpackPrefetch:true */ './routes/About'));
const AddEmp = lazy(() => import(/* webpackPrefetch:true */ './routes/AddEmp'));
const ShowEmp = lazy(() => import(/* webpackPrefetch:true */ './routes/ShowEmp'));
const Home = lazy(() => import('./routes/Home'));
const PageNotFound = lazy(() => import('./routes/PageNotFound'));

function App() {
    return (
        <Router>
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/addEmp" component={AddEmp} />
                    <Route path="/showEmp" component={ShowEmp} />
                    <Route path="/about" component={About} />
                    <Route component={PageNotFound} />
                </Switch>
            </Suspense>
            <ToastContainer autoClose={5000} />
        </Router>
    );
}

export default App;
