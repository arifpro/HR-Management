/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from '../../styles/AddFormStyles.module.scss';

const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required().email(),
});

const AddForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.AddEmployee__form}>
            <input {...register('firstName')} className={styles.AddEmployee__input} />
            <p className={styles.AddEmployee__error}>{errors.firstName?.message}</p>

            <input {...register('lastName')} className={styles.AddEmployee__input} />
            <p className={styles.AddEmployee__error}>{errors.lastName?.message}</p>

            <input {...register('email')} className={styles.AddEmployee__input} />
            <p className={styles.AddEmployee__error}>{errors.email?.message}</p>

            <input type="submit" className={styles.AddEmployee__btn} />
        </form>
    );
};

export default AddForm;
