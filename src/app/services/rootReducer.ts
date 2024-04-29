import { combineReducers } from "@reduxjs/toolkit";
import mainSlice from "./slices/mainSlice";

export const rootReducer = combineReducers({
    main:mainSlice
})