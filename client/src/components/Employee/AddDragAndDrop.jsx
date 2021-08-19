/* eslint-disable no-unused-vars */
import { createTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { DropzoneArea } from 'material-ui-dropzone';
import React, { useState } from 'react';
import { VscLoading } from 'react-icons/vsc';
import validator from 'validator';
import XLSX from 'xlsx';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addMultipleEmployees } from '../../redux/actions';

const theme = createTheme({
    overrides: {
        MuiDropzoneArea: {
            root: {
                borderRadius: '20px',
                minHeight: '186px',
            },
            icon: {
                margin: 0,
            },
        },
        MuiDropzoneSnackbar: {
            infoAlert: {
                backgroundColor: '#2f3c7f',
            },
        },
        MuiDropzonePreviewList: {
            root: {
                margin: 0,
                display: 'flex',
                justifyContent: 'center',
            },
        },
    },
});

const useStyles = makeStyles({
    dropdownSection: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    dropdownSize: {
        width: '400px',
    },
    submitBtn: {
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        height: '50px',
        width: '400px',
        borderRadius: '30px',
        fontSize: '20px',
        fontWeight: '700',
        fontFamily: 'Lato-Regular, sans-serif',
        color: '#fff',
        backgroundColor: '#203263',
        textAlign: 'center',
        boxShadow: '3px 3px 8px #b1b1b1, -3px -3px 8px #fff',
        transition: 'all 0.5s',
        marginTop: '30px',
    },
});

const isValidData = (obj) => {
    if (obj.firstName !== undefined && obj.lastName !== undefined && validator.isEmail(obj.email)) {
        return true;
    }
    return false;
};

const AddDragAndDrop = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [data, setData] = useState([]);

    const Files = (files) => {
        if (files[0]) {
            const fileReader = new FileReader();
            fileReader.onload = (event) => {
                const fileData = event.target.result;

                const workbook = XLSX.read(fileData, {
                    type: 'binary',
                });
                workbook.SheetNames.forEach((sheet) => {
                    const dataArray = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                    // console.log(dataArray);
                    setData(dataArray);
                });
            };
            fileReader.readAsBinaryString(files[0]);
        }
    };

    const onSubmit = () => {
        setData((oldData) => ({ ...oldData, loading: true }));
        const newData = [];

        data.forEach((item) => {
            const modifiedItem = {
                firstName: item['First Name'],
                lastName: item['Last Name'],
                email: item['Email Address'],
            };
            if (isValidData(modifiedItem)) {
                newData.push(modifiedItem);
            }
        });

        const postData = {
            employees: newData,
        };

        dispatch(addMultipleEmployees(postData))
            .then((res) => {
                if (res) {
                    toast.success(res.payload.message);
                } else {
                    toast.success(res.error);
                }
            })
            .catch((error) => {
                console.log(error);
                toast.error(`Error adding employees: ${error.message}!`);
            });

        setData([]);
    };

    return (
        <section className={classes.dropdownSection}>
            <div className={classes.dropdownSize}>
                <MuiThemeProvider theme={theme}>
                    <DropzoneArea
                        onChange={Files}
                        filesLimit={1}
                        // initialFiles={data}
                        maxFileSize={1048576 * 30}
                        acceptedFiles={['.csv', '.xlsx']}
                        showAlerts={['error', 'info']}
                        dropzoneText="Drag and drop csv file here or click"
                        useChipsForPreview
                        getDropRejectMessage={() => 'File Size should be less than 10 MB'}
                    />
                </MuiThemeProvider>
            </div>

            <button
                type="button"
                className={classes.submitBtn}
                onClick={() => onSubmit()}
                disabled={data.loading}
            >
                {data.loading && (
                    <>
                        <VscLoading className="loading__icon" />
                        <span>Adding employees...</span>
                    </>
                )}
                {!data.loading && <span>Submit</span>}
            </button>
        </section>
    );
};

export default AddDragAndDrop;
