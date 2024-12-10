import { createSlice } from "@reduxjs/toolkit";
import AuthOperations from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [AuthOperations.register.fulfilled](state, action) {
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [AuthOperations.logIn.fulfilled](state, action) {
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [AuthOperations.logOut.fulfilled](state) {
      state.user = {
        name: null,
        email: null,
      };
      state.token = null;
      state.isLoggedIn = false;
    },

    [AuthOperations.refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [AuthOperations.refreshUser.fulfilled](state, action) {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [AuthOperations.refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const AuthReducer = AuthSlice.reducer;
export default AuthSlice.reducer;
