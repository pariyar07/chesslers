import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="bg-black min-h-screen">
      <Navbar />
      <App />
      <Footer />
    </main>
  </React.StrictMode>
);
