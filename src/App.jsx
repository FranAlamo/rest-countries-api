import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Countries from "./components/Countries.jsx";
import Filter from "./components/Filter.jsx";
import Header from "./components/Header.jsx";
import CountryInfo from "./components/CountryInfo.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Filter />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/countries/:name" element={<CountryInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
