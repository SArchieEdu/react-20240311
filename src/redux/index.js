import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { headphoneSlice } from "./entities/headphone";
import { codecSlice } from "./entities/codec";
import { reviewSlice } from "./entities/review";
import { userSlice } from "./entities/user";

export const store = configureStore({
  reducer: combineSlices(headphoneSlice, codecSlice, reviewSlice, userSlice),
});

console.log(store.getState());
