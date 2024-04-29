import React from "react";
import style from "./index.module.scss";
import star from "../../assets/icons/star.svg";
import favoriteDef from "../../assets/icons/FavoriteCardDef.svg";
import favoriteAct from "../../assets/icons/FavoriteCardAct.svg";
import { Link } from "react-router-dom";
import { TMovie } from "../../app/types/types";
import { useDispatch, useSelector } from "../../app/types/hooks";
import {
  addFavouriteMovie,
  deleteItem,
  setActive,
} from "../../app/services/slices/mainSlice";
export const MovieCard = ({
  name,
  premiere,
  rating,
  poster,
  countries,
  genres,
  id,
  year,
  position,
}: TMovie) => {
  const genresName = genres!.map((genre) => genre.name);

  const premierDate = premiere?.world.slice(0, 10).replace(/-/g, ".");
  const positionTop = (position! += 1);
  const dispatch = useDispatch();
  const { favouriteMovie, active } = useSelector(
    (store) => store.main,
  );
  
  const handleAddToFavourite = () => {
    const existingItem = favouriteMovie.find(
      (item) => item.id === id,
    );
    dispatch(setActive({ id: id, value: true }));
    if (!existingItem) {
      dispatch(
        addFavouriteMovie({
          name,
          premiere,
          rating,
          poster,
          countries,
          genres,
          id,
          year,
        }),
      );
    }
  };
  const handleDelete = () => {
    dispatch(deleteItem(id));
    dispatch(setActive({ id: id, value: false }));
  };
  return (
    <div className={style.container}>
      <div className={style.poster}>
        {active[id] ? (
          <div>
            <img
              src={favoriteAct}
              alt=''
              className={style.favourite}
              onClick={handleDelete}
            />
          </div>
        ) : (
          <div>
            <img
              src={favoriteDef}
              alt=''
              className={style.favourite}
              onClick={handleAddToFavourite}
            />
          </div>
        )}
        {!Number.isNaN(position) ? (
          <span className={style.position}>{positionTop}</span>
        ) : (
          ""
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
              {premierDate === undefined ? (
                <span>
                  {countries![0].name}, {year}
                </span>
              ) : (
                <span>
                  {countries![0].name}, {premierDate}
                </span>
              )}
              <h1 className={style.title}>{name}</h1>
            </div>
            <div className={style.footerCard}>
              {rating && rating.kp !== 0 && (
                <span className={style.rating}>
                  <img src={star} alt='star' />
                  {rating.kp.toFixed(1)} / 10
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
