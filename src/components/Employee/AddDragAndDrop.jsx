import { createTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { DropzoneArea } from 'material-ui-dropzone';
import React, { useState } from 'react';
import XLSX from 'xlsx';

const theme = createTheme({
    overrides: {
        MuiDropzoneSnackbar: {
            infoAlert: {
                backgroundColor: '#2f3c7f',
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
        width: '500px',
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
                        showAlerts={['error', 'info']}
                        dropzoneText="Drag and drop csv file here or click"
                        useChipsForPreview
                        getDropRejectMessage={() => 'File Size should be less than 10 MB'}
                        // getFileAddedMessage={(fileName) => console.log(fileName)}
                    />
                </MuiThemeProvider>
            </div>
        </section>
    );
};

export default AddDragAndDrop;
