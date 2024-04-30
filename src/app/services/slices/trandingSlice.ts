import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TMovie, TTrandSlice } from "../../types/types";
import { getTrandingMovie } from "../../api";

const initialState: TTrandSlice = {
  trandMovie: [],
  loading: false,
  error: null,
};

export const trandSlice = createSlice({
  name: "trand",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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
      });
  },
});

export default trandSlice.reducer;
