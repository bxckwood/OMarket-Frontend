import { ReactComponent as Kazakhstan } from "../../resources/dropdown/kazakhstan.svg";
import { ReactComponent as Uzbekistan } from "../../resources/dropdown/uzbekistan.svg";
import { ReactComponent as Kyrgyzstan } from "../../resources/dropdown/kyrgyzstan.svg";

export const dataRegisterPage = {
  inputs: [
    {
      placeholder: "Номер телефона",
      inputName: "phonenumber",
      required: true,
      id: 1,
      maxLength: 12,
      minLength: 11,
      type: "text",
    },
    {
      placeholder: "Почта",
      inputName: "email",
      required: true,
      id: 2,
      maxLength: 30,
      minLength: 8,
      type: "email",
    },
    {
      placeholder: "ФИО",
      inputName: "name",
      required: true,
      id: 3,
      maxLength: 30,
      minLength: 12,
      type: "text",
    },
    {
      placeholder: "Введите пароль",
      inputName: "password",
      required: true,
      id: 4,
      maxLength: 15,
      minLength: 8,
      type: "password",
    },
    {
      placeholder: "Повторить пароль",
      inputName: "confirmpassword",
      required: true,
      id: 5,
      maxLength: 15,
      minLength: 8,
      type: "password",
    },
  ],
  dropdowns: [{
    title: "Страна",
    id: 0,
    select: [
      {
        img: <Kazakhstan />,
        item: "Казахстан",
        id: 0,
      },
      {
        img: <Uzbekistan />,
        item: "Узбекистан",
        id: 1,
      },
      {
        img: <Kyrgyzstan />,
        item: "Кыргызстан",
        id: 2,
      },
    ],
  },
  ],
  title: "Регистрация",
};

