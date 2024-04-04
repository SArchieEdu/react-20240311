import { createSlice } from "@reduxjs/toolkit";
import { normalizedCodecs } from "../../../constants/normolized-mock";

export const codecSlice = createSlice({
  name: "codec",
  initialState: {
    entities: normalizedCodecs.reduce((acc, codec) => {
      acc[codec.id] = codec;

      return acc;
    }, {}),
    ids: normalizedCodecs.map(({ id }) => id),
  },
});
