import React, { useState, useEffect } from "react";
import { HeaderMainPage } from "../../widgets/headerMainPage";
import style from "./index.module.scss";
import { MovieCard } from "../../entities/movieCard";
import { TApiResponse, TMovie } from "../../app/types/types";
import { Link } from "react-router-dom";
import { apiKey } from "../../app/api";

export const MainPage = () => {
  const [movies, setMovies] = useState<TMovie[]>([]);
  const [newMovies, setNewMovies] = useState<TMovie[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const url =
  //       "https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&selectFields=id&selectFields=name&selectFields=shortDescription&selectFields=year&selectFields=rating&selectFields=movieLength&selectFields=genres&selectFields=countries&selectFields=poster&notNullFields=id&notNullFields=name&notNullFields=year&notNullFields=rating.kp&notNullFields=movieLength&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url&sortField=rating.kp&sortField=genres.name&sortType=-1&sortType=-1&genres.name=%D0%B4%D1%80%D0%B0%D0%BC%D0%B0&genres.name=%D0%BA%D0%BE%D0%BC%D0%B5%D0%B4%D0%B8%D1%8F&genres.name=%D1%83%D0%B6%D0%B0%D1%81%D1%8B&genres.name=%D0%B4%D0%B5%D1%82%D0%B5%D0%BA%D1%82%D0%B8%D0%B2&type=movie&type=!tv-series&type=!cartoon&";

  //     try {
  //       const response = await fetch(url, {
  //         method: "GET",
  //         headers: {
  //           accept: "application/json",
  //           "X-API-KEY": apiKey,
  //         },
  //       });

  //       const data: TApiResponse = await response.json();
  //       setMovies(data.docs);
  //     } catch (error) {
  //       console.error(
  //         "There was a problem with your fetch operation:",
  //         error,
  //       );
  //     }
  //   };

  //   fetchData();
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&selectFields=&notNullFields=id&notNullFields=name&notNullFields=year&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url&notNullFields=premiere.world&sortField=premiere.russia&sortType=-1&type=movie&status=filming";

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            accept: "application/json",
            "X-API-KEY": apiKey,
          },
        });

        const data: TApiResponse = await response.json();
        setNewMovies(data.docs);
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
        <section className={style.title}>
          <h1>Popular all the time</h1>
          <Link to='/allPopular'>See all popular movies</Link>
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
              premiere={movie.premiere}
              releaseYears={movie.releaseYears}
              rating={movie.rating}
              movieLength={movie.movieLength}
              poster={movie.poster}
              id={movie.id}
            />
          ))}
        </div>
        <section className={style.title}>
          <h1>Popular all the time</h1>
          <Link to='/allPopular'>See all popular movies</Link>
        </section>
        <div className={style.cardBlock}>
          {newMovies.map((movie, index) => (
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
    </div>
  );
};
