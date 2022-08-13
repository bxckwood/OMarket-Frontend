import { FC } from 'react';
import { dataRegisterPage } from './DataRegisterPage';

import Form from '../../components/Form/Form';

import styles from "../RegisterPage/RegisterPage.module.scss"

const RegisterPage: FC = () => {
    return (
        <>
            <Form dataRegisterPage={dataRegisterPage}/>
        </>
    );
};

export default RegisterPage;