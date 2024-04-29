import React, { useEffect } from "react";
import style from "./index.module.scss";
import { Link } from "react-router-dom";
import { getHeaderMovie } from "../../app/api";
import { useDispatch, useSelector } from "../../app/types/hooks";
import { setRandomMovie } from "../../app/services/slices/mainSlice";
export const HeaderMainPage = () => {
  const dispatch = useDispatch();
  const { headerMovie, randomMovie } = useSelector(
    (state) => state.main,
  );
  useEffect(() => {
    dispatch(getHeaderMovie());
  }, [dispatch]);
  useEffect(() => {
    const getRandomMovie = () => {
      if (headerMovie && headerMovie.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * headerMovie.length,
        );
        const selectedMovie = headerMovie[randomIndex];
        dispatch(setRandomMovie(selectedMovie));
      }
    };
    getRandomMovie();
  }, [headerMovie, dispatch]);

  return (
    <div className={style.wrapper}>
      <span className={style.gradient}></span>
      <div className={style.container}>
        <div className={style.info}>
          <section className={style.titleFilm}>
            <h1>{randomMovie?.name}</h1>
            <span>{randomMovie?.shortDescription}</span>
          </section>
          <p className={style.description}>
            <span>{randomMovie?.year}</span>|
            <span>{randomMovie?.genres?.[0].name}</span>
          </p>
          <div className={style.buttons}>
            <Link to={`/movieInfo/${randomMovie?.id}`}>
              <button className={style.button}>
                Read the description
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
