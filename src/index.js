import React, { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { Provider as SupabaseProvider } from "react-supabase";
import App from "./App";
import supabase from "./supabase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <SupabaseProvider value={supabase}>
      <App />
    </SupabaseProvider>
    <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </StrictMode>
);
