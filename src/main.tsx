import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Navbar from "./components/NavBar";
import { Footer } from "./components/Footer";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>
);
