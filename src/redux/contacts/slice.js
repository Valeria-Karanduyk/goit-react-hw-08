import { createSlice } from "@reduxjs/toolkit";
import { getContacts, addContact, deleteContact } from "./operations";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const ContactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    deleteData: null,
    loading: false,
    error: null,
  },
  reducers: {
    setDeleteData(state, action) {
      state.deleteData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.pending, handlePending)
      .addCase(getContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getContacts.rejected, handleRejected)
      .addCase(addContact.fulfilled, (state, action) => {
        state.error = null;
        (state.error = null), state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.error = null;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      });
  },
});

export const { setDeleteData } = ContactSlice.actions;
export default ContactSlice.reducer;
