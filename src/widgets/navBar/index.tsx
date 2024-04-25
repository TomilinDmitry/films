import React from "react";
import style from "./index.module.scss";
import logo from "../../assets/icons/logo.svg";
import film from '../../assets/icons/film.svg'
import favourite from '../../assets/icons/heart.svg'
import trend from '../../assets/icons/trending-up.svg'
import community from '../../assets/icons/users.svg'
import logout from '../../assets/icons/log-out.svg'
import settings from '../../assets/icons/sliders.svg'
import social from '../../assets/icons/message-circle.svg'

export const NavBar = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <section>
          <img src={logo} alt='logo' className={style.image} />
          <h1 className={style.title}>WATCH</h1>
        </section>
        <nav className={style.navigation}>
          <ul className={style.list}>
            <li> <img src={film} alt="homeIcon" />Home</li>
            <li><img src={favourite} alt="favouriteIcon" />Favourites</li>
            <li><img src={trend} alt="trendIcon" />Tranding</li>
            <li><img src={film} alt="comingSoonIcon" />Coming soon</li>
          </ul>
          <ul className={style.list}>
            <li><img src={community} alt="communityIcon" />Community</li>
            <li><img src={social} alt="socialIcon" />Social</li>
          </ul>
          <ul className={style.list}>
            <li><img src={settings} alt="homeIcon" />Settings</li>
            <li><img src={logout} alt="homeIcon" />Logout</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
