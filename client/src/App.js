
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import "./App.css";

import Header from "./components/Header";
import Homepage from "./components/Homepage";

function App() {
  useEffect(() => {
    document.title = "Spa Retreat";
  }, []);

  return (
    <Router>
      <Header />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Wrapper>
    </Router>
  );
