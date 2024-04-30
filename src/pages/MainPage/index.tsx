import React from "react";
import { HeaderMainPage } from "../../widgets/headerMainPage";
import style from "./index.module.scss";
import { PopularMainBlock } from "../../entities/popularBlockMain";
import { CinemaSoonBlock } from "../../entities/cinemaSoonBlock";
import { TopBlock } from "../../entities/topBlock";
import { useSelector } from "../../app/types/hooks";
import { CircularProgress } from "@mui/material";

export const MainPage = () => {
  const { loading, error } = useSelector((store) => store.main);
  return (
    <div className={style.wrapper}>
      <HeaderMainPage />
      <div className={style.main}>
        {error ? (
          <div className={style.error}>{error}</div>
        ) : loading ? (
          <div className={style.loading}>
            Загружаем базы данных...
            <CircularProgress size={70} />
          </div>
        ) : (
          <>
            <PopularMainBlock />
            <CinemaSoonBlock />
            <TopBlock />
          </>
        )}
      </div>
    </div>
  );
};
