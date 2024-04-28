import React, { useEffect, useState } from "react";
import style from "./index.module.scss";
import avatar from "../../assets/images/avatar.svg";
import favouriteOff from "../../assets/images/favouriteOff.svg";
import { TApiResponse, TMovie } from "../../app/types/types";
export const HeaderMainPage = () => {
  const [movie, setMovie] = useState<TMovie[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const url = `https://api.kinopoisk.dev/v1.4/movie?&limit=100&year=2024`;
  //     const apiKey = "WKE87JD-4D441GJ-MPRMZ0Q-6DC5G21";

  //     try {
  //       const response = await fetch(url, {
  //         method: "GET",
  //         headers: {
  //           accept: "application/json",
  //           "X-API-KEY": apiKey,
  //         },
  //       });

  //       const data: TApiResponse = await response.json();
  //       setMovie(data.docs);
  //     } catch (error) {
  //       console.error(
  //         "There was a problem with your fetch operation:",
  //         error,
  //       );
  //     }
  //   };

  //   fetchData();
  // }, []);
  // const [randomMovie, setRandomMovie] = useState<TMovie>();
  // useEffect(() => {
  //   const getRandomMovie = () => {
  //     const randomIndex = Math.floor(Math.random() * movie.length);
  //     return movie[randomIndex];
  //   };
  //   setRandomMovie(getRandomMovie());
  // }, [movie]); 

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
        {/* <div className={style.info}>
          <section className={style.titleFilm}>
            <h1>{randomMovie?.name}</h1>
            <span>{randomMovie?.description}</span>
          </section>
          <p className={style.description}>
            <span>{randomMovie?.year}</span>|<span>{randomMovie?.genres?.[0].name}</span>
          </p>
          <div className={style.buttons}>
            <button className={style.button}>
              Read the description
            </button>
            <button className={style.favouriteOff}>
              <img src={favouriteOff} alt='favouriteOff' />
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};
