import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import overlaySLice from "./slice/overlaySlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    overlay: overlaySLice,
  },
});
