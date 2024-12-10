import { createSlice } from "@reduxjs/toolkit";

const FilterSlice = createSlice;
({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;
export const FilterReducer = FilterSlice.reducer;
export default FilterSlice.reducer;
