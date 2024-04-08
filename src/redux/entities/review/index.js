import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviewsByProductId } from "./thunks/get-reviews-by-product-id";

const entityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
  name: "review",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(
      getReviewsByProductId.fulfilled,
      (state, { payload: reviews }) => entityAdapter.upsertMany(state, reviews)
    ),
});
