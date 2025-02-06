import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    login: false,
  },
  reducers: {
    login: (state, action) => {
      state.login = action.payload;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
