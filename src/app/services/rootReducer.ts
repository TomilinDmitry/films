import { combineReducers } from "@reduxjs/toolkit";
import mainSlice from "./slices/mainSlice";
import popularSlice from "./slices/popularSlice";
import trandSlice from "./slices/trandingSlice";
import topSlice from "./slices/topSlice";
import soonSlice from "./slices/soonSlice";

export const rootReducer = combineReducers({
  main: mainSlice,
  popular: popularSlice,
  trand: trandSlice,
  top: topSlice,
  soon: soonSlice,
});
