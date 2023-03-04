import Root from "./pages/Root";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Flowsheets from "./pages/Flowsheets";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import Page from "./components/Page";
import classes from "./App.module.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/home", element: <Home /> },
      { path: "/flowsheet", element: <Flowsheets /> },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
