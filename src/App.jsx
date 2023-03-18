import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import InputPage from "./pages/InputPage";
import DisplayPage from "./pages/DisplayPage";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<InputPage />} />
        <Route path="/display/:id" element={<DisplayPage />} />
      </Routes>
    </>
  );
}

export default App;
