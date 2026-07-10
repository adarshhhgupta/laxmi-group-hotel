import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import "./index.css";

import SeaResortPage from "./pages/SeaResortPage";
import GrandSeaPage from "./pages/GrandSeaPage";
import UtpalaPage from "./pages/UtpalaPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<App />} />

        <Route
          path="/sea-resort"
          element={<SeaResortPage />}
        />

        <Route
          path="/hotel-grand-sea"
          element={<GrandSeaPage />}
        />

        <Route
          path="/hotel-utpala"
          element={<UtpalaPage />}
        />

      </Routes>

    </BrowserRouter>

  </React.StrictMode>
);