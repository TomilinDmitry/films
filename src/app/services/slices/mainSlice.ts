import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TMainSlice, TMovie } from "../../types/types";
import { getHeaderMovie } from "../../api";
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
