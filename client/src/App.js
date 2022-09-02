import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes></Routes>
      <Footer />
    </Router>
  );
}

export default App;
