import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 350,
        backgroundColor: theme.palette.background.paper,
        borderRadius: '20px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const CustomModal = ({ children, viewModal, setViewModal }) => {
    const classes = useStyles();

    return (
        <div>
            <Modal
                open={viewModal}
                onClose={() => setViewModal(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div
                    style={{
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%)`,
                    }}
                    className={classes.paper}
                >
                    {children}
                </div>
            </Modal>
        </div>
    );
};

export default CustomModal;
