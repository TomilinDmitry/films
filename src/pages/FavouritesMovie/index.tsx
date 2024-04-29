import React from "react";
import style from "./index.module.scss";
import { MovieCard } from "../../entities/movieCard";
import { useSelector } from "../../app/types/hooks";
export const FavouritesMovie = () => {
  const { favouriteMovie } = useSelector((store) => store.main);
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <h1>My Favourites Movie</h1>
        <div className={style.cardBlock}>
          {favouriteMovie.map((movie, index) => (
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
    </div>
  );
};
