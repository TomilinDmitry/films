import React, { useEffect } from "react";
import style from "./index.module.scss";
import { MovieCard } from "../../entities/movieCard";
import { useDispatch, useSelector } from "../../app/types/hooks";
import { getTrandingMovie } from "../../app/api";
import { CircularProgress } from "@mui/material";
export const TrandingMovie = () => {
  const { trandMovie, error, loading } = useSelector(
    (store) => store.trand,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTrandingMovie());
  }, [dispatch]);
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <h1>Trand Movie</h1>
        {error ? (
          <div className={style.error}>{error}</div>
        ) : loading ? (
          <div className={style.loading}>
            Подсчитываем голоса...
            <CircularProgress size={70} />
          </div>
        ) : (
          <div className={style.cardBlock}>
            {trandMovie.map((movie, index) => (
              <MovieCard
                countries={movie.countries}
                genres={movie.genres}
                key={index}
                position={movie.position}
                name={movie.name}
                year={movie.year}
                description={movie.description}
                type={movie.type}
                premiere={movie.premiere}
                releaseYears={movie.releaseYears}
                rating={movie.rating}
                movieLength={movie.movieLength}
                poster={movie.poster}
                id={movie.id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
