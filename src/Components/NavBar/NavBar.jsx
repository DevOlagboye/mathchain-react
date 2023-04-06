import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/LOGO.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <div className="navbar-container">
        <a href="https://matchain.io">
          <img src={logo} alt="" className="logo" />
        </a>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink
              to="/"
              className="nav-links"
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px red solid" : "none",
              })}
            >
              Testnet
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/developers"
              className="nav-links"
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px red solid" : "none",
              })}
            >
              Developers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/ecosystem"
              className="nav-links"
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px red solid" : "none",
              })}
            >
              Ecosystem
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
