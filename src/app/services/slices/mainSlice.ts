import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TMainSlice, TMovie } from "../../types/types";
import {
  getAllPopularMovie,
  getCinemaSoon,
  getHeaderMovie,
  getPopularMovie,
  getTopMovie,
  getTrandingMovie,
} from "../../api";
const saveDataToLocalStorage = <T>(key: string, data: T) => {
  localStorage.setItem(key, JSON.stringify(data));
};
const loadDataFromLocalStorage = <T>(key: string): T => {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : null;
};

const initialState: TMainSlice = {
  headerMovie: [],
  randomMovie: null,
  popularMovie: [],
  allPopularMovie: [],
  cinemaSoonMovie: [],
  trandMovie: [],
  topMovie: [],
  loading: false,
  error: null,
  infoMovie: null,
  viewed: loadDataFromLocalStorage("viewed") || false,
  favouriteMovie: loadDataFromLocalStorage("favourite") || [],
  active:
    loadDataFromLocalStorage<{ [key: number]: boolean }>("active") ||
    {},
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setRandomMovie: (state, action: PayloadAction<TMovie>) => {
      state.randomMovie = action.payload;
    },
    addFavouriteMovie: (state, action: PayloadAction<TMovie>) => {
      state.favouriteMovie.push(action.payload);
      saveDataToLocalStorage("favourite", state.favouriteMovie);
    },
    setViewed: (state, action: PayloadAction<boolean>) => {
      state.viewed = action.payload;
      saveDataToLocalStorage("viewed", state.viewed);
    },
    setActive: (
      state,
      action: PayloadAction<{ id: number; value: boolean }>,
    ) => {
      const { id, value } = action.payload;
      state.active[id] = value;
      saveDataToLocalStorage("active", state.active);
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      state.favouriteMovie = state.favouriteMovie.filter(
        (el) => el.id !== action.payload,
      );
      saveDataToLocalStorage("favourite", state.favouriteMovie);
      saveDataToLocalStorage("acitve", state.active);
    },
  },
  extraReducers: (builder) => {
    builder
      //Popular
      .addCase(getPopularMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getPopularMovie.fulfilled,
        (state, action: PayloadAction<TMovie[]>) => {
          state.popularMovie = action.payload;
          state.error = null;
          state.loading = false;
        },
      )
      .addCase(getPopularMovie.rejected, (state, action) => {
        state.error = action.error.message ?? null;
      })
      // All Popular
      .addCase(getAllPopularMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getAllPopularMovie.fulfilled,
        (state, action: PayloadAction<TMovie[]>) => {
          state.allPopularMovie = action.payload;
          state.error = null;
          state.loading = false;
        },
      )
      .addCase(getAllPopularMovie.rejected, (state, action) => {
        state.error = action.error.message ?? null;
      })
      // cinemaSoon
      .addCase(getCinemaSoon.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getCinemaSoon.fulfilled,
        (state, action: PayloadAction<TMovie[]>) => {
          state.cinemaSoonMovie = action.payload;
          state.error = null;
          state.loading = false;
        },
      )
      .addCase(getCinemaSoon.rejected, (state, action) => {
        state.error = action.error.message ?? null;
      })
      // HeaderMovie
      .addCase(getHeaderMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getHeaderMovie.fulfilled,
        (state, action: PayloadAction<TMovie[]>) => {
          state.headerMovie = action.payload;
          state.error = null;
          state.loading = false;
        },
      )
      .addCase(getHeaderMovie.rejected, (state, action) => {
        state.error = action.error.message ?? null;
      })
      // Tranding
      .addCase(getTrandingMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getTrandingMovie.fulfilled,
        (state, action: PayloadAction<TMovie[]>) => {
          state.trandMovie = action.payload;
          state.error = null;
          state.loading = false;
        },
      )
      .addCase(getTrandingMovie.rejected, (state, action) => {
        state.error = action.error.message ?? null;
      })
      // TopMovie
      .addCase(getTopMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getTopMovie.fulfilled,
        (state, action: PayloadAction<TMovie[]>) => {
          state.topMovie = action.payload;
          state.error = null;
          state.loading = false;
        },
      )
      .addCase(getTopMovie.rejected, (state, action) => {
        state.error = action.error.message ?? null;
      });
  },
});

export const {
  setRandomMovie,
  addFavouriteMovie,
  setActive,
  deleteItem,
  setViewed,
} = mainSlice.actions;

export default mainSlice.reducer;
