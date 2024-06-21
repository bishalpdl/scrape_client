import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/user-slice";

export const store = configureStore({
  reducer: { user: userSlice },
});

export type RootState = ReturnType<typeof store.getState>;
