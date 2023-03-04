import Root from "./pages/Root";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Flowsheets from "./pages/Flowsheets";
import NurseNotes from "./pages/NurseNotes";
import QR from "./pages/QR";
import Policy from "./pages/Policy";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useState, useEffect } from "react";
import PatientList from "./pages/PatientList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/home", element: <Home /> },
      { path: "/flowsheet", element: <Flowsheets /> },
      { path: "/nursenotes", element: <NurseNotes /> },
      { path: "/qr", element: <QR /> },
      { path: "/policy", element: <Policy /> },
      { path: "/patientlist", element: <PatientList /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
