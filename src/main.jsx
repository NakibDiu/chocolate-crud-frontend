import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Chocolates from "./components/Chocolates.jsx";
import AddChocolate from "./components/AddChocolate";
import UpdateChocolate from "./components/UpdateChocolate";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Chocolates />,
        loader: () => fetch("http://localhost:5000/chocolates")
      },
      {
        path: "/chocolates/add",
        element: <AddChocolate />,
      },
      {
        path: "/chocolates/update/:id",
        element: <UpdateChocolate />,
        loader: ({params}) => fetch(`http://localhost:5000/chocolates/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
