import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TMovie, TTopSlice } from "../../types/types";
import { getTopMovie } from "../../api";

const initialState: TTopSlice = {
  topMovie: [],
  loading: false,
  error: null,
};

export const mainSlice = createSlice({
  name: "top",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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

export default mainSlice.reducer;
