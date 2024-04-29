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

export const apiKey = "WMC9A5D-37VMZPT-JBSEQNF-Q7NXXG7";
// "WKE87JD-4D441GJ-MPRMZ0Q-6DC5G21"
//  "TN22RSS-CXH48N4-HB1M47H-5SRF18D";
// 5MJ05CQ-E6VMB9V-QFJ0DTC-78X7Z6R
// "H8SA2J7-D04M6V5-P9BY0XR-S16QMX0"
// "NXGN9QB-1VAMAVP-Q0RFQRJ-HY5V8HT"
// "K6NRNZ5-6KB4CJS-GPEQHYT-QFWZ120"
// "5MJ05CQ-E6VMB9V-QFJ0DTC-78X7Z6R"
type TServerResponse<T> = {
  docs: T;
} & T;

export const checkResponse = <T,>(res: Response): Promise<T> => {
  return res.ok ? res.json() : Promise.reject(`Ошибка:${res.status}`);
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
