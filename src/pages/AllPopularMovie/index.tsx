import React, { useEffect } from "react";
import style from "./style.module.scss";
import { MovieCard } from "../../entities/movieCard";
import { getAllPopularMovie } from "../../app/api";
import { useDispatch, useSelector } from "../../app/types/hooks";
export const AllPopularMovie = () => {
  const dispatch = useDispatch();
  const { allPopularMovie } = useSelector((store) => store.popular);
  useEffect(() => {
    dispatch(getAllPopularMovie());
  }, [dispatch]);

  return (
    <div className={style.main}>
      <section className={style.title}>
        <h1>Top 100 rated films</h1>
      </section>
      <div className={style.cardBlock}>
        {allPopularMovie.map((movie, index) => (
          <MovieCard
            countries={movie.countries}
            genres={movie.genres}
            key={index}
            name={movie.name}
            description={movie.description}
            type={movie.type}
            year={movie.year}
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
