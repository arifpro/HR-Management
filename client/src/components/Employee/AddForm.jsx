/* eslint-disable react/jsx-props-no-spreading */
// import PropTypes from 'prop-types';
import { Box, Tab, Tabs, Typography } from '@material-ui/core';
import { createTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IoMail, IoPerson } from 'react-icons/io5';
import { VscLoading } from 'react-icons/vsc';
import { toast } from 'react-toastify';
import AddDragAndDrop from './AddDragAndDrop';
import './AddForm.scss';
import { addSingleEmployee } from '../../redux/actions';

// const isString = (input) => {
//     if (Object.prototype.toString.call(input) === '[object String]') return true;
//     return false;
// };

const themes = createTheme({
    overrides: {
        MuiTab: {
            wrapper: {
                fontFamily: 'Comic Sans MS',
                fontWeight: 'bold',
                fontSize: '1rem',
            },
        },
        MuiTabs: {
            root: {
                borderRight: 'none !important',
                marginLeft: '1rem',
            },
            scrollable: {
                display: 'flex',
                alignItems: 'center',
            },
        },
        PrivateTabIndicator: {
            colorSecondary: {
                backgroundColor: 'none',
            },
        },
    },
});

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

//   styles
const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        borderRadius: '10px',
        boxShadow:
            '0px 0px 50px #5f5f5f, 0px 0px 0px 0px #ecf0f3, 8px 8px 15px #a7aaaf, -8px -8px 15px #fff',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

// main function
const AddForm = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [value, setValue] = useState(0);
    const initialData = {
        firstName: '',
        lastName: '',
        email: '',
        error: false,
        loading: false,
    };
    const [data, setData] = useState(initialData);

    const onSubmit = () => {
        setData((oldData) => ({ ...oldData, loading: true }));
        const postData = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
        };

        dispatch(addSingleEmployee(postData))
            .then((res) => {
                if (res) {
                    toast.success(res.payload.message);
                } else {
                    toast.success(res.error);
                }
            })
            .catch((error) => {
                console.log(error);
                toast.error(`Error adding employee: ${error.message}!`);
            });

        setData(initialData);
    };

    return (
        <div className="AddForm">
            <div className={classes.root}>
                <MuiThemeProvider theme={themes}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={(event, newValue) => setValue(newValue)}
                        className={classes.tabs}
                    >
                        <Tab label="Form" {...a11yProps(0)} />
                        <Tab label="CSV" {...a11yProps(1)} />
                    </Tabs>
                </MuiThemeProvider>
                <TabPanel value={value} index={0}>
                    <form autoComplete="off" className="mainSection">
                        <div className="form__logo" />
                        <div className="form__title">Add Single Employee</div>
                        <div className="form__sub-title">Please fill all required fields!</div>
                        <div className="form__fields">
                            <div className="form__username">
                                <IoPerson />
                                <input
                                    type="text"
                                    placeholder="First name"
                                    autoComplete="off"
                                    onChange={(e) => {
                                        setData((oldData) => ({
                                            ...oldData,
                                            firstName: e.target.value,
                                            error: false,
                                        }));
                                    }}
                                />
                            </div>

                            <div className="form__username">
                                <IoPerson />
                                <input
                                    type="text"
                                    placeholder="Last name"
                                    autoComplete="off"
                                    onChange={(e) => {
                                        setData((oldData) => ({
                                            ...oldData,
                                            lastName: e.target.value,
                                            error: false,
                                        }));
                                    }}
                                />
                            </div>

                            <div className="form__username">
                                <IoMail />
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    autoComplete="off"
                                    onChange={(e) => {
                                        setData((oldData) => ({
                                            ...oldData,
                                            email: e.target.value,
                                            error: false,
                                        }));
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
                            className="main__button"
                            onClick={() => onSubmit()}
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
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <form autoComplete="off" className="mainSection">
                        <div className="form__logo" />
                        <div className="form__title">Add Multiple Employees</div>
                        <div className="form__sub-title">Please add a csv file!</div>
                        <div className="dropzone__field">
                            <AddDragAndDrop />
                        </div>
                    </form>
                </TabPanel>
            </div>
        </div>
    );
};

export default AddForm;
