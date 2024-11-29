import { configureStore } from "@reduxjs/toolkit";
import aboutReducer from "./slices/about-slicer";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    about: aboutReducer,
  },
});
