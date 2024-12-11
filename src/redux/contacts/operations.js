import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getContacts = createAsyncThunk("contacts/fetchAll", async () => {
  try {
    const { data } = await axios.get("/contacts");
    console.log(data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact) => {
    try {
      const { data } = await axios.post("/contacts", contact);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
