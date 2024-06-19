// routing.tsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, PredictPage } from "@/pages"; // Adjust import path as per your project structure

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/predictpage" element={<PredictPage />} />
      <Route path="*" element={<Navigate to="/predictpage" />} /> {/* Default redirect */}
    </Routes>
  );
}
