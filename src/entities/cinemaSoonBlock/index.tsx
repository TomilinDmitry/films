import React, { useEffect} from "react";
import style from "./index.module.scss";
import { MovieCard } from "../movieCard";
import { useDispatch, useSelector } from "../../app/types/hooks";
import { getCinemaSoon } from "../../app/api";

export const CinemaSoonBlock = () => {

  const dispatch = useDispatch()
  const {cinemaSoonMovie} = useSelector(store=>store.main)
  useEffect(() => {
    dispatch(getCinemaSoon())
  }, [dispatch]);
  return (
    <div>
      <section className={style.title}>
        <h1>Сinema soon</h1>
      </section>
      <div className={style.cardBlock}>
        {cinemaSoonMovie.map((movie, index) => (
          <MovieCard
            countries={movie.countries}
            genres={movie.genres}
            key={index}
            name={movie.name}
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
