import React, { StrictMode } from "react";
import "./index.css";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Trash from "./components/Trash";
import { DataProvider } from "./context/DataProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/trash",
    element: <Trash />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </DataProvider>
  // </StrictMode>
);
