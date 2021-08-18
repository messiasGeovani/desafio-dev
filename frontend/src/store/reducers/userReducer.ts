import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../";

export type UserState = {
  name: string;
  email: string;
  token: string;
};

const initialState: UserState = {
  name: "",
  email: "",
  token: "",
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state = action.payload;
    },
    removeUser: (state) => {
      state = { name: "", email: "", token: "" };
    },
  },
});

export const { setUser, removeUser } = user.actions;

export const selectUser = (state: RootState) => state;

export default user.reducer;
