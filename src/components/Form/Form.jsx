import { useForm } from "react-hook-form";

import Input from "../Input/Input";

import styles from "../Form/Form.module.scss";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";

const Form= ({ dataRegisterPage }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => console.log(data);
  console.log(dataRegisterPage.dropdowns)
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={styles.formTitle}>{dataRegisterPage.title}</h1>
      <Dropdown dataDropdown={dataRegisterPage.dropdowns}/>
      {dataRegisterPage.inputs.map((elem) => {
        const { placeholder, inputName, id, required, type, maxLength, minLength } = elem;
        return (
          <Input
            placeholder={placeholder}
            errors={errors[inputName]}
            inputName={inputName}
            register={register}
            key={id}
            watch={watch}
            required={required}
            maxLength={"" || maxLength}
            minLength={"" || minLength}
            type={type}
          />
        );
      })}
      <Button disabled={!isDirty || !isValid}/>
    </form>
  );
};

export default Form;
