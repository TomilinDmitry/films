import React from "react";
import style from "./layout.module.scss";
import { NavBar } from "../widgets/navBar";
import { Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <div className={style.wrapper}>
      <nav className={style.navigation}>
        <NavBar />
      </nav>
      <main className={style.main}>
        <Outlet />
      </main>
    </div>
  );
};
