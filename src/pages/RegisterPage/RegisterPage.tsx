import { FC } from 'react';
import { dataRegisterPage } from './DataRegisterPage';

import Form from '../../components/Form/Form';

import styles from "../RegisterPage/RegisterPage.module.scss"

const RegisterPage: FC = () => {
    return (
        <div className={styles.register}>
            <Form dataRegisterPage={dataRegisterPage}/>
        </div>
    );
};

export default RegisterPage;