import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Navbar from "./NavBar";
import { Footer } from "./Footer";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>
);
