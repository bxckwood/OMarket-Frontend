import { FC, useState } from "react";

import styles from "../Input/Input.module.scss";
import { ReactComponent as OpenEye } from "../../resources/form/openEye.svg";
import { ReactComponent as CloseEye } from "../../resources/form/closeEye.svg";

import { IInput } from "../../interfaces/interfaces";

const Input: FC<IInput> = ({
  placeholder,
  register,
  inputName,
  required,
  errors,
  type,
  maxLength,
  minLength,
  watch,
}) => {
  const [inputType, setInputType] = useState(type);

  const changeType = (textOrPassword: string) => {
    setInputType(textOrPassword);
  };
  console.log(errors);
  return (
    <>
      <div className={styles.inputContainer}>
        <input
          placeholder={placeholder}
          className={
            !!errors ? `${styles.input} ${styles.error}` : `${styles.input}`
          }
          type={inputType}
          {...register(inputName, {
            required: required ? "Поле обязательно к заполнению" : null,
            minLength: {
              value: minLength,
              message: `Минимум ${minLength} символов`,
            },
            maxLength: {
              value: maxLength,
              message: `Максимум ${maxLength} символов`,
            },
            validate: (val: string) => {
              if (
                inputName === "confirmpassword" &&
                watch("password") !== val
              ) {
                return "Пароли не совпадают";
              }
            },
          })}
        />
        {inputType === "password" ? (
          <OpenEye onClick={() => changeType("text")} className={styles.eye} />
        ) : type === "password" ? (
          <CloseEye
            onClick={() => changeType("password")}
            className={styles.closeEye}
          />
        ) : null}
        {errors && <p className={styles.errorText}>{errors?.message}</p>}
      </div>
    </>
  );
};

export default Input;
