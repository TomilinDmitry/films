import React from "react";
import style from "./index.module.scss";
import avatar from "../../assets/images/avatar.svg";
import favouriteOff from "../../assets/images/favouriteOff.svg";
export const HeaderMainPage = () => {
  return (
    <div className={style.wrapper}>
      <span className={style.gradient}></span>
      <div className={style.container}>
        <div className={style.topNavigation}>
          <ul className={style.listNavigation}>
            <li>Movies</li>
            <li>Series</li>
          </ul>
          <ul className={style.profile}>
            <li>
              <img src={avatar} alt='avatar' />
              <span>Dmitry</span>
            </li>
          </ul>
        </div>
        <div className={style.info}>
          <section className={style.titleFilm}>
            <h1>Insider</h1>
          </section>
          <p className={style.description}>
            <span>2022</span>|<span>Comedy</span>|
            <span>1 Season</span>
          </p>
          <div className={style.buttons}>
            <button className={style.button}>
              Read the description
            </button>
            <button className={style.favouriteOff}>
              <img src={favouriteOff} alt='favouriteOff' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
