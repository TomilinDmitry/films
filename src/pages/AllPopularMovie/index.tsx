import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import { MovieCard } from "../../entities/movieCard";
import { TApiResponse, TMovie } from "../../app/types/types";
import { apiKey } from "../../app/api";
export const AllPopularMovie = () => {
  const [movies, setMovies] = useState<TMovie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://api.kinopoisk.dev/v1.4/movie?page=1&limit=100&selectFields=id&selectFields=name&selectFields=shortDescription&selectFields=year&selectFields=rating&selectFields=movieLength&selectFields=genres&selectFields=countries&selectFields=poster&notNullFields=id&notNullFields=name&notNullFields=year&notNullFields=rating.kp&notNullFields=movieLength&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url&sortField=rating.kp&sortField=genres.name&sortType=-1&sortType=-1&genres.name=%D0%B4%D1%80%D0%B0%D0%BC%D0%B0&genres.name=%D0%BA%D0%BE%D0%BC%D0%B5%D0%B4%D0%B8%D1%8F&genres.name=%D1%83%D0%B6%D0%B0%D1%81%D1%8B&genres.name=%D0%B4%D0%B5%D1%82%D0%B5%D0%BA%D1%82%D0%B8%D0%B2&type=movie&type=!tv-series&type=!cartoon&";

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            accept: "application/json",
            "X-API-KEY": apiKey,
          },
        });

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
    <div className={style.main}>
      <section className={style.title}>
        <h1>Top 100 Popular Movie</h1>
      </section>
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
  );
};
