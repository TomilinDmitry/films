import React from "react";
import style from "./App.module.scss";
import { NavBar } from "../widgets/navBar";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { MainPage } from "../pages/MainPage";
import { AllPopularMovie } from "../pages/AllPopularMovie";
import { FavouritesMovie } from "../pages/FavouritesMovie";
import { MovieInfo } from "../pages/MovieInfo";

function App() {
  return (
    <div className={style.App}>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/allPopular' element={<AllPopularMovie />} />
          <Route path='/favourite' element={<FavouritesMovie />} />
          <Route path='/commingSoon' element={<AllPopularMovie />} />
          <Route path='/tranding' element={<AllPopularMovie />} />
          <Route path='/movieInfo/:id' element={<MovieInfo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
