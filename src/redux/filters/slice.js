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

export const { changeFilter } = FilterSlice.actions;
export default FilterSlice.reducer;
