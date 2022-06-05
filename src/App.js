import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favorite.js" element={<Favorite />} />
      </Routes>
    </>
  );
}

export default App;
