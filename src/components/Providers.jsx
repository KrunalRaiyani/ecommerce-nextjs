"use client";
import store from "@/Redux/store";
import { Provider } from "react-redux";
import GlobalModals from "./GlobalModals";
import "../app/globals.css";

export function Providers({ children }) {
  return (
    <Provider store={store}>
      {children}
      <GlobalModals />
    </Provider>
  );
}
