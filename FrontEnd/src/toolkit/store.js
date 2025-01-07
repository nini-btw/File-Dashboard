import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "./slice/tableSlice";

const store = configureStore({
  reducer: {
    table: tableReducer,
  },
});

export default store;
