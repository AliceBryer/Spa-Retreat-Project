import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import "./App.css";

import Header from "./components/Header";
import Homepage from "./components/Homepage";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Facilities from "./components/FacilitiesPage"

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
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Facilities" element={<Facilities />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
