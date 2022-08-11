import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "../Header/Header.module.scss";

import { ReactComponent as BigLogo } from "../../resources/header/bigLogo.svg";
import { ReactComponent as Profile } from "../../resources/header/profile.svg";
import { ReactComponent as Coin } from "../../resources/header/coin.svg";
import { ReactComponent as Cart } from "../../resources/header/cart.svg";
import { headerTabsData } from "./Data.Header";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <Link className={styles.headerTopLink} to="/">
          Акции
        </Link>
        <Link className={styles.headerTopLink + " " + styles.green} to="/">
          Сеты
        </Link>
      </div>
      <div className={styles.headerMiddle}>
        <Link to="/">
          <BigLogo />
        </Link>
        <input
          className={styles.headerMiddleSearch}
          placeholder="Какой товар вы ищете?"
        />
        <Link className={styles.headerMiddleProfile} to="/">
          <span>Профиль</span>
          <Profile className={styles.headerMiddleProfileImg} />
        </Link>
        <div className={styles.headerMiddleCartPrice}>
          <span>2600</span>
          <Coin className={styles.headerMiddleCartPriceImg} />
        </div>
        <div className={styles.headerMiddleCart}>
          <Cart className={styles.headerMiddleCartImg} />
        </div>
      </div>
      <div className={styles.headerBottom}>
        {headerTabsData.map((elem, index) => (
          <>
            <Link to={`/category/${elem.url}`} key={index} className={styles.headerBottomTab}>
              {elem.img}
              <span>{elem.title}</span>
            </Link>
          </>
        ))}
      </div>
    </header>
  );
};

export default Header;
