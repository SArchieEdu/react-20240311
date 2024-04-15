import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { headphoneSlice } from "./entities/headphone";
import { codecSlice } from "./entities/codec";
import { reviewSlice } from "./entities/review";
import { userSlice } from "./entities/user";
import { cartSlice } from "./ui/cart";
import { apiService } from "./service/api";

export const store = configureStore({
  reducer: combineSlices(
    headphoneSlice,
    codecSlice,
    reviewSlice,
    userSlice,
    cartSlice,
    apiService
  ),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
});

console.log(store.getState());
