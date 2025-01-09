import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,

  timeout: 10 * 1000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("ecomToken")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("ecomToken")}`;
  }
  return req;
});

// ============================================== Auth routes  ============================================================
// login
export const login = async (formData) =>
  API.post("/user/auth/signin", formData);

// signup
export const signUp = async (formData) =>
  API.post("/user/auth/signup", formData);

// verify otp
export const verifyOtp = async (formData) =>
  API.post("/user/auth/verify-otp", formData);
