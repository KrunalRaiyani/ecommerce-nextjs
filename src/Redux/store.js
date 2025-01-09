import { configureStore } from "@reduxjs/toolkit";
import loginModalSlice from "./slice/modals/login-popup";
import loginSlice from "./slice/auth/loginSlice";
import signUpSlice from "./slice/auth/signupSlice";

const store = configureStore({
  reducer: {
    loginModal: loginModalSlice,
    login: loginSlice,
    signUp: signUpSlice,
  },
});

export default store;
