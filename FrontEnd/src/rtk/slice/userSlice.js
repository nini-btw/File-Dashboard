import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    login: false,
    role: "user",
  },
  reducers: {
    login: (state, action) => {
      state.login = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { login, setRole } = userSlice.actions;
export default userSlice.reducer;
