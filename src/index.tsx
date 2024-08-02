import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import "flowbite";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Navbar />
    <Header />
  </React.StrictMode>
);
