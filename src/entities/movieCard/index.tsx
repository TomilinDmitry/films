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
  type,
  year,
  releaseYears,
  rating,
  movieLength,
  poster,
}: TMovie) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <Link to='/cardInfo'>
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

          <img src={poster.url} alt='poster' className={style.posterImage} />
        </div>
        <div className={style.descriptionBlock}>
          <section className={style.description}>
            <span className={style.year}>USA,2018</span>
            <h1 className={style.title}>{name}</h1>
            <span className={style.rating}>
              <img src={star} alt='star' />
              {rating.kp.toFixed(1)} / 10
            </span>
            <span className={style.genre}>{type}</span>
          </section>
        </div>
      </div>
    </Link>
  );
};
