import { createTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { DropzoneArea } from 'material-ui-dropzone';
import React, { useState } from 'react';
import { VscLoading } from 'react-icons/vsc';
import XLSX from 'xlsx';

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
        // height: '186px',
    },
    // btnSection: {
    //     marginTop: '1rem',
    //     display: 'flex',
    //     width: '100%',
    //     justifyContent: 'space-between',
    // },
    submitBtn: {
        // background: '#ecf0f3',
        // boxShadow: '-3px -3px 7px #ffffff, 3px 3px 5px #ceced1',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // borderRadius: '25px',
        // position: 'relative',
        // width: '100%',
        // border: 'none',
        // outline: 'none',
        // padding: '12px 0',
        // color: '#31344b',
        // fontFamily: 'Comic Sans MS',
        // fontSize: '17px',
        // fontWeight: 400,
        // cursor: 'pointer',
        // zIndex: 4,
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

const AddDragAndDrop = () => {
    const classes = useStyles();
    const [data, setData] = useState({});
    const Files = (files) => {
        if (files[0]) {
            const fileReader = new FileReader();
            fileReader.onload = (event) => {
                const fileData = event.target.result;

                const workbook = XLSX.read(fileData, {
                    type: 'binary',
                });
                workbook.SheetNames.forEach((sheet) => {
                    const rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                    console.log(rowObject);
                    setData(rowObject);
                });
            };
            fileReader.readAsBinaryString(files[0]);
        }
    };

    return (
        <section className={classes.dropdownSection}>
            <div className={classes.dropdownSize}>
                <MuiThemeProvider theme={theme}>
                    <DropzoneArea
                        onChange={Files}
                        filesLimit={1}
                        initialFiles={data.csv}
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
                onClick={() => null}
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
