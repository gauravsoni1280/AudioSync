import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  isDJMode: false, // ✅ DJ mode stored here
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.isDJMode = false; // Reset DJ mode on logout
    },
    toggleDJMode(state) {
      state.isDJMode = !state.isDJMode;
    },
  },
});

export const { login, logout, toggleDJMode } = authSlice.actions;
export default authSlice.reducer;
