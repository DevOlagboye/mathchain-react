import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Dropdown } from "antd";
import logo from "../../assets/images/LOGO.png";
import languageChoose from "../../assets/images/Language_notchoose.png";
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();
  const handleNavigate = (e) => {
    e.preventDefault();
    window.open("https://testnet.matchscan.io/", "_blank");
  };
  const items = [
    {
      label: <a href="##">English</a>,
      key: "0",
    },
    {
      label: <a href="##">Francais</a>,
      key: "0",
    },
    {
      label: <p href="##">Portugues</p>,
      key: "0",
    },
  ];
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
              onClick={handleNavigate}
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px red solid" : "none",
              })}
            >
              Testnet
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="https://matchain.gitbook.io/match-chain/"
              className="nav-links"
              target="_blank"
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
          <Dropdown menu={{ items }} trigger={["click"]}>
            <li className="dropdown-menu" onClick={(e) => e.preventDefault()}>
              <img
                src={languageChoose}
                alt="language"
                className="language-choose"
              />{" "}
              Language{" "}
            </li>
          </Dropdown>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
