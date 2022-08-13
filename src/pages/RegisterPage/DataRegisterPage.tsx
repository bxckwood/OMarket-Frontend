export const dataRegisterPage = {
    inputs: [
        {placeholder: "Номер телефона", inputName: "phonenumber", required: true, id: 1, maxLength: 12, minLength: 11, type: "text"},
        {placeholder: "Почта", inputName: "email", required: true, id: 2, maxLength: 30, minLength: 8, type: "email"},
        {placeholder: "Введите пароль", inputName: "password", required: true, id: 3, maxLength: 15, minLength: 8, type: "password"},
        {placeholder: "Повторить пароль", inputName: "confirmpassword", required: true, id: 4, maxLength: 15, minLength: 8, type: "password"},
    ],
    dropdowns: [
    ],
    title: "Регистрация"
}