import React from "react";
import { HeaderMainPage } from "../../widgets/headerMainPage";
import style from "./index.module.scss";
export const MainPage = () => {
  return (
    <div className={style.wrapper}>
      <HeaderMainPage />
      <div className={style.main}>
        <h1>Trending</h1>
        <div className={style.cardBlock}>
          <div className={style.card}>123</div>
          <div className={style.card}></div>
          <div className={style.card}></div>
          <div className={style.card}></div>
          <div className={style.card}></div>
          <div className={style.card}></div>
        </div>
      </div>
    </div>
  );
};
