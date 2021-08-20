import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../";

export type UserState = {
  id: string;
  name: string;
  email: string;
  token: string;
};

const initialState: UserState = {
  id: "",
  name: "",
  email: "",
  token: "",
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return action.payload;
    },
    removeUser: (state) => {
      state = { id: "", name: "", email: "", token: "" };
    },
  },
});

export const { setUser, removeUser } = user.actions;

export const getUser = (state: RootState) => state;

export default user.reducer;
