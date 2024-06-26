import { createAsyncThunk } from "@reduxjs/toolkit";
import { TMovie } from "../types/types";
import {
  allPopularMovie,
  cinemaSoonMovie,
  headerMovieApi,
  popularMovieApi,
  topMovie,
  trandingMovie,
} from "./vars";

export const apiKey = "TN22RSS-CXH48N4-HB1M47H-5SRF18D";
// "5MJ05CQ-E6VMB9V-QFJ0DTC-78X7Z6R"
// "WKE87JD-4D441GJ-MPRMZ0Q-6DC5G21"
type TServerResponse<T> = {
  docs: T;
} & T;

export const checkResponse = <T>(res: Response): Promise<T> => {
  if (res.ok) {
    return res.json();
  } else {
    return res.json().then((error) => Promise.reject(error.message));
  }
};

export const getPopularMovie = createAsyncThunk(
  "asyncPopularMovie",
  async () => {
    const response = await fetch(popularMovieApi, {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-KEY": apiKey,
      },
    });
    const data = await checkResponse<TServerResponse<TMovie[]>>(
      response,
    );
    return data.docs;
  },
);

export const getAllPopularMovie = createAsyncThunk(
  "asyncAllPopularMovie",
  async () => {
    const response = await fetch(allPopularMovie, {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-KEY": apiKey,
      },
    });
    const data = await checkResponse<TServerResponse<TMovie[]>>(
      response,
    );
    return data.docs;
  },
);

export const getCinemaSoon = createAsyncThunk(
  "asyncCinemaSoonMovie",
  async () => {
    const response = await fetch(cinemaSoonMovie, {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-KEY": apiKey,
      },
    });
    const data = await checkResponse<TServerResponse<TMovie[]>>(
      response,
    );
    return data.docs;
  },
);

export const getTopMovie = createAsyncThunk(
  "asyncTopCinema",
  async () => {
    const response = await fetch(topMovie, {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-KEY": apiKey,
      },
    });
    const data = await checkResponse<TServerResponse<TMovie[]>>(
      response,
    );
    return data.docs;
  },
);
export const getTrandingMovie = createAsyncThunk(
  "asyncTrandingMovie",
  async () => {
    const response = await fetch(trandingMovie, {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-KEY": apiKey,
      },
    });
    const data = await checkResponse<TServerResponse<TMovie[]>>(
      response,
    );
    return data.docs;
  },
);

export const getHeaderMovie = createAsyncThunk(
  "asyncaHeaderMovie",
  async () => {
    const response = await fetch(headerMovieApi, {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-KEY": apiKey,
      },
    });
    const data = await checkResponse<TServerResponse<TMovie[]>>(
      response,
    );
    return data.docs;
  },
);
