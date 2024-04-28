import React, { useState } from "react";
import style from "./index.module.scss";
import poster from "../../assets/images/Poster.svg";
import star from "../../assets/icons/star.svg";
import favoriteDef from "../../assets/icons/FavoriteCardDef.svg";
import favoriteAct from "../../assets/icons/FavoriteCardAct.svg";
import { Link } from "react-router-dom";
import { TMovie } from "../../app/types/types";
export const MovieCard = ({
  name,
  description,
  premiere,
  rating,
  poster,
  countries,
  genres,
  id,
}: TMovie) => {
  const genresName = genres!.map((genre) => genre.name);
  const [active, setActive] = useState<boolean>(false);
  console.log(premiere?.world)
  return (
    <div className={style.container}>
      <div className={style.poster}>
        {active ? (
          <img
            src={favoriteAct}
            alt=''
            className={style.favourite}
            onClick={() => setActive(!active)}
          />
        ) : (
          <img
            src={favoriteDef}
            alt=''
            className={style.favourite}
            onClick={() => setActive(!active)}
          />
        )}

        <img
          src={poster.url}
          alt='poster'
          className={style.posterImage}
        />
      </div>
      <Link to={`/movieInfo/${id}`}>
        <div className={style.descriptionBlock}>
          <section className={style.description}>
            <div>
              <span className={style.year}>
                {countries![0].name}
              </span>
              <h1 className={style.title}>{name}</h1>
            </div>
            <div className={style.footerCard}>
              {rating && rating.kp !== 0 && (
                <span className={style.rating}>
                  <img src={star} alt='star' />
                  `${rating.kp.toFixed(1)} / 10`
                </span>
              )}
              {genresName[0] && genresName[1] ? (
                <span className={style.genre}>
                  {genresName[0]}, {genresName[1]}{" "}
                </span>
              ) : (
                <span className={style.genre}>{genresName[0]} </span>
              )}
            </div>
          </section>
        </div>
      </Link>
    </div>
  );
};
