import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TMovie, TPopularSlice } from "../../types/types";
import { getAllPopularMovie, getPopularMovie } from "../../api";

const initialState: TPopularSlice = {
  popularMovie: [],
  allPopularMovie: [],
  loading: false,
  error: null,
};

export const popularSlice = createSlice({
  name: "popular",
  initialState,
  reducers: {},
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
        state.error = action.error.message;
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
        state.error = action.error.message;
      });
  },
});

export default popularSlice.reducer;
