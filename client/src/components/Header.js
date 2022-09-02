import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => (
  <div className="header">
    <div className="company-name">404GETAWAY</div>
    <div className="nav-bar">
      <nav>
        <ul>
          <li className="nav-list">
            <NavLink to="/">
              <FontAwesomeIcon icon={faHome} />
              &nbsp;
            </NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="/Facilities">Facilities</NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="/Treatment">Treatment</NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="/MyAccount">My Account</NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="/Login">Login</NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="/Signup">Signup</NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="/Basket">
              <FontAwesomeIcon icon={faCartShopping} />
              &nbsp;
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
