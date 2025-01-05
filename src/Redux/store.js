import { configureStore } from "@reduxjs/toolkit";
import loginModalSlice from "./slice/modals/login-popup";

const store = configureStore({
  reducer: {
    loginModal: loginModalSlice,
  },
});

export default store;
