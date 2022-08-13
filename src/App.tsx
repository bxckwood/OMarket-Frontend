import React from "react";
import { Routes, Route } from "react-router";

import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Layout from "./layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<>1213</>} />
        <Route path="/register" element={<RegisterPage/>} />
      </Route>
    </Routes>
  );
}

export default App;
