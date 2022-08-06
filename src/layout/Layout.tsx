import React, { FC } from "react";
import { Outlet } from "react-router";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import "./Layout.css";

const Layout: FC = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
