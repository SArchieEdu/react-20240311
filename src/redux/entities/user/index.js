import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../constants/normolized-mock";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    entities: normalizedUsers.reduce((acc, user) => {
      acc[user.id] = user;

      return acc;
    }, {}),
    ids: normalizedUsers.map(({ id }) => id),
  },
});
