import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  TApiResponse,
  TApiResponseOneMovie,
  TMovie,
} from "../../app/types/types";
import style from "./index.module.scss";
import eyeSlashed from "../../assets/icons/eye-slashed.svg";
import eye from "../../assets/icons/eye.svg";
import { apiKey } from "../../app/api";
export const MovieInfo = () => {
  const params = useParams();

  const [movie, setMovie] = useState<TMovie>();
  const [click, setClick] = useState<boolean>(false);
  const [tab, setTab] = useState<string>("О фильме");

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.kinopoisk.dev/v1.4/movie/${params.id}`;
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            accept: "application/json",
            "X-API-KEY": apiKey,
          },
        });

        const data: TMovie = await response.json();
        setMovie(data);
      } catch (error) {
        console.error(
          "There was a problem with your fetch operation:",
          error,
        );
      }
    };

    fetchData();
  }, []);
  const director = movie?.persons?.filter(
    (person) => person.profession === "режиссеры",
  );

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <nav className={style.navigation}>
          <ul className={style.navigationElements}>
            <li>
              <button
                className={`${
                  tab === "О фильме" ? style.aboutFilm : style.details
                }`}
                onClick={() => setTab("О фильме")}>
                О фильме
              </button>
            </li>
            <li>
              <button
                className={`${
                  tab === "Детали" ? style.aboutFilm : style.details
                }`}
                onClick={() => setTab("Детали")}>
                Детали
              </button>
            </li>
          </ul>
        </nav>
        {tab === "О фильме" ? (
          <main className={style.mainBlock}>
            <div className={style.logo}>
              <h1>{movie?.name}</h1>
            </div>
            <div className={style.info}>
              <span className={style.rating}>
                {movie?.rating?.kp.toFixed(1)}
              </span>
              <span className={style.filmDescription}>
                {movie?.year}, {movie?.genres?.[0].name}{" "}
                {movie?.countries?.[0].name}
              </span>
            </div>
            <p className={style.description}>
              {movie?.shortDescription}
            </p>
            <div className={style.buttons}>
              <button className={style.favourite}>
                Добавить в избранное
              </button>
              {click ? (
                <button
                  onClick={() => setClick(!click)}
                  className={style.viewed}>
                  <img src={eye} alt='eyeSlashed' />
                  Просмотрен
                </button>
              ) : (
                <button
                  className={style.notViewed}
                  onClick={() => setClick(!click)}>
                  <img src={eyeSlashed} alt='eyeSlashed' />
                  Просмотрен
                </button>
              )}
            </div>
          </main>
        ) : (
          <main className={style.mainBlock}>
            <div className={style.logoDetails}>
              <h1>{movie?.name}</h1>
            </div>
            <div className={style.infoDetails}>
              <span className={style.rating}>
                {movie?.rating?.kp.toFixed(1)}
              </span>
              <span className={style.filmVotes}>
                {movie?.votes?.kp} оценок
              </span>
            </div>
            <div className={style.descriptionBlock}>
              <div className={style.description}>
                <p>{movie?.description}</p>
              </div>
              <div className={style.actors}>
                <h1>В главных ролях</h1>
                <ul className={style.actorsList}>
                  {movie!.persons?.slice(0, 5).map((actor) => (
                    <li key={actor.name}>{actor.name}</li>
                  ))}
                </ul>
                <h1>Режиссёры</h1>
                <ul className={style.actorsList}>
                  {director!.slice(0, 5).map((actor) => (
                    <li key={actor.name}>{actor.name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={style.buttons}>
              <button className={style.favourite}>
                Добавить в избранное
              </button>
              {click ? (
                <button
                  onClick={() => setClick(!click)}
                  className={style.viewed}>
                  <img src={eye} alt='eyeSlashed' />
                  Просмотрен
                </button>
              ) : (
                <button
                  className={style.notViewed}
                  onClick={() => setClick(!click)}>
                  <img src={eyeSlashed} alt='eyeSlashed' />
                  Просмотрен
                </button>
              )}
            </div>
          </main>
        )}
      </div>
      {tab === "О фильме" ? (
        <div className={style.background}>
          <div className={style.layout}></div>
          <img src={movie?.backdrop?.url} alt='' />
        </div>
      ) : (
        <div className={style.backgroundDetails}></div>
      )}
    </div>
  );
};
