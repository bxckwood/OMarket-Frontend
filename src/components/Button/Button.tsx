import { FC } from "react";

import styles from "../Button/Button.module.scss";

const Button: FC = ({ disabled }: any) => {
  return (
    <button className={!disabled ? styles.buttonActive : styles.buttonError} disabled={disabled} type="submit">
      Зарегистрировать
    </button>
  );
};

export default Button;
