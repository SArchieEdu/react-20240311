import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectHeadphoneReviewIds } from "../../headphone/selectors";
import { selectReviewIds } from "../selectors";

export const getReviewsByProductId = createAsyncThunk(
  "reviews/getReviewsByProductId",
  async (productId) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?productId=${productId}`
    );

    return response.json();
  },
  {
    condition: (productId, { getState }) => {
      const state = getState();
      const productReviewIds = selectHeadphoneReviewIds(state, productId);
      const reviewIds = selectReviewIds(state);

      return productReviewIds.some((id) => !reviewIds.includes(id));
    },
  }
);
