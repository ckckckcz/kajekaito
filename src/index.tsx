import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import "flowbite";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <About />
  </React.StrictMode>
);
