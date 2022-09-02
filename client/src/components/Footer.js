import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <h5>©Team Super Awesome</h5>
      <div className="footer">
        <ul>
          <li>
            <NavLink to="/AboutUs">About Us</NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
