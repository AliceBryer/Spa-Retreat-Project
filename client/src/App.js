import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import "./App.css";

import Header from "./components/Header";
import Homepage from "./components/Homepage";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Facilities from "./components/FacilitiesPage";
import Footer from "./components/Footer";
import Treatment from "./components/treatmentList/treatmentList";
import Wishlist from "./components/Wishlist";
import About from "./components/About";
import AboutUs from "./components/AboutUs";
import MyAccount from "./components/MyAccount";

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
          <Route path="/treatment" element={<Treatment />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/about" element={<About />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/myaccount" element={<MyAccount />} />
        </Routes>
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
