/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ toggle, setToggle, registeredUsername }) => {
  return (
    <nav style={{ left: toggle && "0" }} className="navbar">
      <ul className="navbar-links">
        <Link
          to="/"
          onClick={() => setToggle(false)}
          className="li navbar-link"
        >
          Home
        </Link>
        <Link
          to="/authors"
          onClick={() => setToggle(false)}
          className="li navbar-link"
        >
          Authors
        </Link>
        <Link
          to="/about"
          onClick={() => setToggle(false)}
          className="li navbar-link"
        >
          About us
        </Link>
        <Link
          to="/contact"
          onClick={() => setToggle(false)}
          className="li navbar-link"
        >
          Contact
        </Link>
        {registeredUsername ? (
          <li className="navbar-link">
            <span>Welcome, {registeredUsername}!</span>
          </li>
        ) : (
          <Link
            to="/register"
            onClick={() => setToggle(false)}
            className="li navbar-link"
          >
            Register
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
