import React, { useEffect } from "react";
import style from "./index.module.scss";

import { useDispatch, useSelector } from "../../app/types/hooks";
import { getCinemaSoon } from "../../app/api";
import { MovieCard } from "../../entities/movieCard";

export const AllCinemaSoon = () => {
  const dispatch = useDispatch();
  const { cinemaSoonMovie } = useSelector((store) => store.main);
  useEffect(() => {
    dispatch(getCinemaSoon());
  }, [dispatch]);
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <h1>Coming soon Movie</h1>
        <div className={style.cardBlock}>
          {cinemaSoonMovie.map((movie, index) => (
            <MovieCard
              countries={movie.countries}
              genres={movie.genres}
              key={index}
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
      </div>
    </div>
  );
};
