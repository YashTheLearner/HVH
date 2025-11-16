import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/home.jsx";
import AboutUs from "./pages/aboutUs.jsx";
import Products from "./pages/products.jsx";

const router = createBrowserRouter([{ 
  path: "/", 
  element: <Layout />,
  children: [
    { path: "/", element: <Home />},
    { path: "/aboutUs", element: <AboutUs />},
    { path: "/products", element: <Products />},
  ]}]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
