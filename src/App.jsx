import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Countries from "./Components/Countries";
import Filter from "./Components/Filter";
import Header from "./Components/Header";
function App() {
  return (
    <Router>
      <Header />
      <Filter />
      <Countries />
    </Router>
  );
}

export default App;
