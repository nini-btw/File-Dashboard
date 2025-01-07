import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: "asc", // Sort order
  orderBy: "id", // Column to sort by
  selected: [], // Selected rows
  page: 0, // Current page
  rowsPerPage: 5, // Rows per page
  dense: false, // Dense padding state
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.order = action.payload.order;
      state.orderBy = action.payload.orderBy;
    },
    toggleSelection: (state, action) => {
      const id = action.payload;
      if (state.selected.includes(id)) {
        state.selected = state.selected.filter(
          (selectedId) => selectedId !== id
        );
      } else {
        state.selected.push(id);
      }
    },
    selectAll: (state, action) => {
      if (action.payload.isSelected) {
        state.selected = action.payload.ids;
      } else {
        state.selected = [];
      }
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setRowsPerPage: (state, action) => {
      state.rowsPerPage = action.payload;
    },
    toggleDense: (state) => {
      state.dense = !state.dense;
    },
  },
});

export const {
  setOrder,
  toggleSelection,
  selectAll,
  setPage,
  setRowsPerPage,
  toggleDense,
} = tableSlice.actions;

export default tableSlice.reducer;
