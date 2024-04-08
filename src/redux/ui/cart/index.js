import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    incrementProduct: (state, { payload: id }) => {
      const product = state[id] || 0;

      state[id] = product + 1;
    },
    decrementProduct: (state, { payload: id }) => {
      state[id] = (state[id] || 0) - 1;

      if (state[id] <= 0) {
        delete state[id];
      }
    },
  },
});

export const { incrementProduct, decrementProduct } = cartSlice.actions;
