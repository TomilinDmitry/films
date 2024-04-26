import React, { useState, useEffect } from "react";
import { HeaderMainPage } from "../../widgets/headerMainPage";
import style from "./index.module.scss";
import { MovieCard } from "../../entities/movieCard";
import { TApiResponse, TMovie } from "../../app/types/types";

export const MainPage = () => {
  const [movies, setMovies] = useState<TMovie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://api.kinopoisk.dev/v1.4/movie?page=1&limit=8";
      const apiKey = "5MJ05CQ-E6VMB9V-QFJ0DTC-78X7Z6R";

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            accept: "application/json",
            "X-API-KEY": apiKey,
          },
        });

        // if (!response.ok) {
        //   throw new Error("Network response was not ok");
        // }

        const data: TApiResponse = await response.json();
        setMovies(data.docs);
      } catch (error) {
        console.error(
          "There was a problem with your fetch operation:",
          error,
        );
      }
    };

    fetchData();
  }, []);

  return (
    <div className={style.wrapper}>
      <HeaderMainPage />
      <div className={style.main}>
        <h1>Popular all the time</h1>
        <div className={style.cardBlock}>
          {movies.map((movie, index) => (
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
              id={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
