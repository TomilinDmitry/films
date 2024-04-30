import React, { useEffect } from "react";
import style from "./index.module.scss";
import { MovieCard } from "../movieCard";
import { useDispatch, useSelector } from "../../app/types/hooks";
import { getTopMovie } from "../../app/api";
export const TopBlock = () => {
  const dispatch = useDispatch();
  const { topMovie } = useSelector((store) => store.top);

  useEffect(() => {
    dispatch(getTopMovie());
  }, [dispatch]);

  return (
    <div>
      {" "}
      <section className={style.title}>
        <h1>Top 10 of the month</h1>
      </section>
      <div className={style.cardBlock}>
        {topMovie.map((movie, index) => (
          <MovieCard
            countries={movie.countries}
            genres={movie.genres}
            key={index}
            position={index}
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
  );
};
