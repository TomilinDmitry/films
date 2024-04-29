import React from "react";
import style from "./App.module.scss";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { MainPage } from "../pages/MainPage";
import { AllPopularMovie } from "../pages/AllPopularMovie";
import { FavouritesMovie } from "../pages/FavouritesMovie";
import { MovieInfo } from "../pages/MovieInfo";
import { TrandingMovie } from "../pages/TrandingPage";
import { AllCinemaSoon } from "../pages/CommingSoon";

function App() {
  return (
    <div className={style.App}>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/allPopular' element={<AllPopularMovie />} />
          <Route path='/favourite' element={<FavouritesMovie />} />
          <Route path='/commingSoon' element={<AllCinemaSoon />} />
          <Route path='/tranding' element={<TrandingMovie />} />
          <Route path='/movieInfo/:id' element={<MovieInfo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
