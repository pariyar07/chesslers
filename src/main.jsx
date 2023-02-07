import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/footer";
import App from "./App";
import "./index.css";
import Navbar from "./components/navbar";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="bg-black min-h-screen">
      <Navbar />
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <Footer />
    </main>
  </React.StrictMode>
);
