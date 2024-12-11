import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      token.set(data.token);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    console.log(thunkAPI.getState());
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    console.log(persistedToken);
    if (persistedToken === null) {
      console.log("!persistedToken");
      return thunkAPI.rejectWithValue();
      // return state;
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      console.log(data);
      return data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
