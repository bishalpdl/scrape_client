import { createSlice } from "@reduxjs/toolkit";

import {
  getUserData,
  setUserLogin,
  isUserLogin,
  resetLoginData,
  setUserData,
} from "@/utils/utils";

export interface IUserState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
  loginStatus: boolean;
}

const initialState: IUserState = {
  user: getUserData() || {},
  loginStatus: isUserLogin() || false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      setUserLogin({ ...action.payload });
      state.user = action.payload;
      state.loginStatus = true;
    },

    setUser: (state, action) => {
      setUserData({ ...state.user, ...action.payload });
      state.user = { ...state.user, ...action.payload };
    },

    resetLogin: (state) => {
      resetLoginData();
      state.user = {};
      state.loginStatus = false;
    },
  },
});

export const { setLogin, setUser, resetLogin } = userSlice.actions;
export default userSlice.reducer;
