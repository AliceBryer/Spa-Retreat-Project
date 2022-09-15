import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCartShopping } from "@fortawesome/free-solid-svg-icons";

import Auth from "../utils/auth";

const Header = () => {
  return (
    <div className="header">
      <div className="company-name">404GETAWAY</div>
      <div className="nav-bar">
        <nav>
          <ul>
            <li className="nav-list">
              <NavLink to="/">
                <FontAwesomeIcon icon={faHome} />
              </NavLink>
            </li>
            <li className="nav-list">
              <NavLink to="/facilities">Facilities</NavLink>
            </li>
            <li className="nav-list">
              <NavLink to="/treatment">Treatment</NavLink>
            </li>
            <li className="nav-list">
              <NavLink to="/aboutus">Contributors</NavLink>
            </li>
            {/* navbar when logged in, show my account and basket, and logout*/}
            {Auth.loggedIn() ? (
              <>
                <li className="nav-list">
                  <NavLink to="/myaccount">My Account</NavLink>
                </li>
                <li className="nav-list">
                  <NavLink to="/wishlist">Wishlist</NavLink>
                </li>
                <li className="nav-list">
                  <NavLink to="/cart">
                    <FontAwesomeIcon icon={faCartShopping} />
                  </NavLink>
                </li>
                <li className="nav-list">
                  {/* refresh the page when logged out */}
                  <a
                    href="/"
                    className="logout-btn"
                    onClick={() => Auth.logout()}
                  >
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                {/* navbar when logged out, show longin and signup */}
                <li className="nav-list">
                  <NavLink to="/login">Login</NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
