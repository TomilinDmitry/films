import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TMovie } from "../../app/types/types";
import style from "./index.module.scss";
import eyeSlashed from "../../assets/icons/eye-slashed.svg";
import eye from "../../assets/icons/eye.svg";
import { apiKey } from "../../app/api";
import youtube from "../../assets/icons/youtube.svg";
import { useDispatch, useSelector } from "../../app/types/hooks";
import { setViewed } from "../../app/services/slices/mainSlice";

export const MovieInfo = () => {
  const params = useParams();
  const [movie, setMovie] = useState<TMovie>();
  const [tab, setTab] = useState<string>("О фильме");
  const { viewed } = useSelector((store) => store.main);
  const dispatch = useDispatch();
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
  }, [dispatch,params.id]);
  const director = movie?.persons?.filter(
    (person) => person.profession === "режиссеры",
  );
  function formatTime(minutes: any) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    if (hours === 1) {
      return `${hours} час ${remainingMinutes} мин.`;
    } else {
      return `${hours} часа ${remainingMinutes} мин.`;
    }
  }

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
              {movie?.logo?.url ? (
                <img src={movie?.logo?.url} alt='logo' />
              ) : (
                <h1>{movie?.name}</h1>
              )}
            </div>
            <div className={style.info}>
              <span className={style.rating}>
                {movie?.rating?.kp.toFixed(1)}
              </span>
              <span className={style.filmDescription}>
                {movie?.year}, {movie?.genres?.[0].name},
                {movie?.countries?.[0].name},
                {formatTime(movie?.movieLength)}, {movie?.ageRating}+
              </span>
            </div>
            {movie?.top250 ? (
              <div className={style.topPostionBlock}>
                <img
                  src='data:image/png;base64,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'
                  alt='topIcon'
                />
                <span className={style.nameTop}>ТОП-250</span>
                <span className={style.positionTop}>
                  {movie?.top250}
                </span>
              </div>
            ) : (
              ""
            )}
            <p className={style.description}>
              {movie?.shortDescription}
            </p>
            <div className={style.buttons}>
              <button className={style.favourite}>
                Добавить в избранное
              </button>
              <Link to={`${movie?.videos?.trailers[0].url}`}>
                <button className={style.trailer}>
                  <img src={youtube} alt='youtube' /> Смотреть трейлер
                </button>
              </Link>
              {viewed ? (
                <button
                  onClick={() => dispatch(setViewed(!viewed))}
                  className={style.viewed}>
                  <img src={eye} alt='eyeSlashed' />
                  Просмотрен
                </button>
              ) : (
                <button
                  className={style.notViewed}
                  onClick={() => dispatch(setViewed(!viewed))}>
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
              {viewed ? (
                <button
                  onClick={() => dispatch(setViewed(!viewed))}
                  className={style.viewed}>
                  <img src={eye} alt='eyeSlashed' />
                  Просмотрен
                </button>
              ) : (
                <button
                  className={style.notViewed}
                  onClick={() => dispatch(setViewed(!viewed))}>
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
          <img src={movie?.backdrop?.url} alt='background' />
        </div>
      ) : (
        <div className={style.backgroundDetails}></div>
      )}
    </div>
  );
};
