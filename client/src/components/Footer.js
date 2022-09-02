import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <h5>©Team Super Awesome</h5>
      <div className="footer-wrap">
        <ul className="footer-list">
          <li>
            <NavLink to="/AboutUs">About Us</NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
