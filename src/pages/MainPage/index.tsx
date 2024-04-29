import React from "react";
import { HeaderMainPage } from "../../widgets/headerMainPage";
import style from "./index.module.scss";
import { PopularMainBlock } from "../../entities/popularBlockMain";
import { CinemaSoonBlock } from "../../entities/cinemaSoonBlock";
import { TopBlock } from "../../entities/topBlock";

export const MainPage = () => {
  return (
    <div className={style.wrapper}>
      <HeaderMainPage />
      <div className={style.main}>
        <PopularMainBlock />
        <CinemaSoonBlock />
        <TopBlock />
      </div>
    </div>
  );
};
