import React from "react";
import style from "./App.module.scss";
import { NavBar } from "../widgets/navBar";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { MainPage } from "../pages/MainPage";

function App() {
  return (
    <div className={style.App}>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<MainPage />} />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
