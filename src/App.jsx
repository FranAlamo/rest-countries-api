import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Countries from "./components/Countries.jsx";
import Header from "./components/Header.jsx";
import Country from "./components/Country.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/countries/:name" element={<Country />} />
      </Routes>
    </Router>
  );
}

export default App;
