import React, { FC } from "react";
import { Link } from "react-router-dom";

import styles from "../Footer/Footer.module.scss";

import { ReactComponent as Logo } from "../../resources/footer/logo.svg";
import { ReactComponent as DownloadGoogle } from "../../resources/footer/buygoogle.svg";
import { ReactComponent as DownloadAppStore } from "../../resources/footer/buyappstore.svg";
import { ReactComponent as Email } from "../../resources/footer/email.svg";
import { ReactComponent as Phone } from "../../resources/footer/phone.svg";
import { ReactComponent as Location } from "../../resources/footer/location.svg";
import { ReactComponent as Facebook } from "../../resources/footer/facebook.svg";
import { ReactComponent as Instagram } from "../../resources/footer/instagram.svg";
import { ReactComponent as WhatsApp } from "../../resources/footer/whatsapp.svg";

const footerSecondAndThirdColumnData = [
  [
    { url: "/", text: "О компании" },
    { url: "/", text: "Новости" },
    { url: "/", text: "Вакансии" },
    { url: "/", text: "Поставщикам" },
    { url: "/", text: "Вопросы и ответы" },
  ],
  [
    { url: "/", text: "Тех. поддержка" },
    { url: "/", text: "Политика возврата" },
    { url: "/", text: "Договор оферты" },
    { url: "/", text: "График службы доставки: 09.00-20.00" },
  ],
];

const footerLastColumnData = [
  [
    {
      url: "mailto:ceo@omar-market.kz",
      img: <Email />,
      text: "ceo@omar-market.kz",
    },
    {
      url: "tel:+7 7132 513 510",
      img: <Phone />,
      text: "+7 7132 513 510",
    },
    {
      url: "https://www.google.ru/maps/",
      img: <Location />,
      text: "г. Актобе, ул. Назарбаева, 123/1",
    },
  ],
  [
    { url: "https://www.facebook.com/", img: <Facebook />, text: "" },
    { url: "https://instagram.com/", img: <Instagram />, text: "" },
    { url: "https://www.whatsapp.com/", img: <WhatsApp />, text: "" },
  ],
];

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__top}>
        <div className={`${styles.footer__topColumn} ${styles.first}`}>
          <Link to="/">
            <Logo />
          </Link>
          <span className={`${styles.first__topColumnText}`}>
            Скачайте наше мобильное приложение
          </span>
          <div>
            <a href="https://play.google.com/store/games?hl=ru&gl=US">
              <DownloadGoogle className={styles.first__topColumnImg} />
            </a>
            <a href="https://www.apple.com/ru/app-store/">
              <DownloadAppStore />
            </a>
          </div>
        </div>
        <div className={styles.footer__topColumn}>
          {footerSecondAndThirdColumnData[0].map((elem, index) => (
            <Link
              key={index}
              className={styles.footer__topColumnText}
              to={elem.url}
            >
              {elem.text}
            </Link>
          ))}
        </div>
        <div className={styles.footer__topColumn}>
          {footerSecondAndThirdColumnData[1].map((elem, index) => (
            <Link
              key={index}
              className={
                !(index === footerSecondAndThirdColumnData[1].length - 1)
                  ? styles.footer__topColumnText
                  : `${styles.footer__topColumnText} ${styles.last}`
              }
              to={elem.url}
            >
              {elem.text}
            </Link>
          ))}
        </div>
        <div className={styles.footer__topColumn}>
          <div className={`${styles.footer__topColumn}`}>
            {footerLastColumnData[0].map((elem, index) => (
              <a
                className={`${styles.footer__topColumnLastTop}`}
                key={index}
                href={elem.url}
              >
                {elem.img}
                <span className={styles.footer__topColumnLastTopText}>
                  {elem.text}
                </span>
              </a>
            ))}
          </div>
          <div className={`${styles.footer__topColumnLastTop}`}>
            {footerLastColumnData[1].map((elem, index) => (
              <a key={index} href={elem.url} className={styles.socialIcon}>
                {elem.img}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.footer__bottom}>
        <span>Все права защищены 2021</span>
        <span>Разработано Digital Agency Nidge</span>
      </div>
    </footer>
  );
};

export default Footer;
