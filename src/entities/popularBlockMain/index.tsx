import React, { useEffect } from "react";
import style from "./index.module.scss";
import { Link } from "react-router-dom";
import { MovieCard } from "../movieCard";
import { useDispatch, useSelector } from "../../app/types/hooks";
import { getPopularMovie } from "../../app/api";
export const PopularMainBlock = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularMovie());
  }, [dispatch]);
  const { popularMovie } = useSelector((store) => store.popular);
  return (
    <div>
      <section className={style.title}>
        <h1>Popular all the time</h1>
        <Link to='/allPopular'>See all popular movies</Link>
      </section>
      <div className={style.cardBlock}>
        {popularMovie.map((movie, index) => (
          <MovieCard
            countries={movie.countries}
            genres={movie.genres}
            key={index}
            name={movie.name}
            description={movie.description}
            type={movie.type}
            year={movie.year}
            premiere={movie.premiere}
            releaseYears={movie.releaseYears}
            position={movie.position}
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
