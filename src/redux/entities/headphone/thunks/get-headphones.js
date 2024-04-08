import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectHeadphoneIds } from "../selectors";

export const getHeadphones = createAsyncThunk(
  "headphone/getHeadphones",
  async (_, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/products");
    const result = await response.json();

    if (result.length === 0) {
      return rejectWithValue("no data");
    }

    return result;
  },
  {
    condition: (_, { getState }) => !selectHeadphoneIds(getState())?.length,
  }
);
