/* eslint-disable react/jsx-props-no-spreading */
// import PropTypes from 'prop-types';
import { Box, Tab, Tabs, Typography } from '@material-ui/core';
import { createTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import { IoMail, IoPerson } from 'react-icons/io5';
import { VscLoading } from 'react-icons/vsc';
import AddDragAndDrop from './AddDragAndDrop';
import './AddForm.scss';

// const isString = (input) => {
//     if (Object.prototype.toString.call(input) === '[object String]') return true;
//     return false;
// };

const themes = createTheme({
    overrides: {
        MuiTabs: {
            scrollable: {
                display: 'flex',
                alignItems: 'center',
            },
            flexContainer: {
                color: 'blue',
                // backgroundColor: 'blue',
                selected: {
                    color: 'red',
                },
            },
        },
        PrivateTabIndicator: {
            colorSecondary: {
                color: 'blue',
                backgroundColor: 'gray',
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
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        error: false,
        loading: false,
    });
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => console.log(data), [data]);

    return (
        <div className="AddForm">
            <div className={classes.root}>
                <MuiThemeProvider theme={themes}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        className={classes.tabs}
                    >
                        <Tab label="Form" {...a11yProps(0)} />
                        <Tab label="CSV" {...a11yProps(1)} />
                    </Tabs>
                </MuiThemeProvider>
                <TabPanel value={value} index={0}>
                    <form autoComplete="off" className="mainSection">
                        <div className="navbar__logo" />
                        <div className="navbar__title">Add Single Employee</div>
                        <div className="navbar__sub-title">Please fill all required fields!</div>
                        <div className="navbar__fields">
                            <div className="navbar__username">
                                <IoPerson />
                                <input
                                    // type="text"
                                    placeholder="First name"
                                    autoComplete="off"
                                    onChange={(e) => {
                                        setData({ ...data, name: e.target.value, error: false });
                                    }}
                                />
                            </div>

                            <div className="navbar__username">
                                <IoPerson />
                                <input
                                    type="text"
                                    placeholder="Last name"
                                    autoComplete="off"
                                    onChange={(e) => {
                                        setData({ ...data, name: e.target.value, error: false });
                                    }}
                                />
                            </div>

                            <div className="navbar__username">
                                <IoMail />
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    autoComplete="off"
                                    onChange={(e) => {
                                        setData({ ...data, email: e.target.value, error: false });
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
                            className="navbar__signin-button"
                            onClick={() => null}
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
                        <div className="navbar__logo" />
                        <div className="navbar__title">Add Multiple Employees</div>
                        <div className="navbar__sub-title">Please add a csv file!</div>
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
