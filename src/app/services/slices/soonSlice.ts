import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TMovie, TSoonSlice } from "../../types/types";
import { getCinemaSoon } from "../../api";

const initialState: TSoonSlice = {
  cinemaSoonMovie: [],
  loading: false,
  error: null,
};

export const soonSlice = createSlice({
  name: "soon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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
      });
  },
});

export default soonSlice.reducer;
