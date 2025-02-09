import { createSlice } from "@reduxjs/toolkit";

export const overlaySLice = createSlice({
  name: "overlaySLice",
  initialState: {
    display: false,
  },
  reducers: {
    setDisplay: (state, action) => {
      state.display = action.payload;
    },
  },
});

export const { setDisplay } = overlaySLice.actions;
export default overlaySLice.reducer;
