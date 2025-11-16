import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
    <Navbar/>
        <Outlet/>
    <Footer/>
    </>
  );
}