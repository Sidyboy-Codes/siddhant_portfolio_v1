import React from "react";
import LgNav from "./LgNav";
import logo from "./sidLogo.svg";
import SmNav from "./SmNav";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#">
        <img src={logo} className="logo" />
      </a>
      <SmNav />
      <LgNav />
    </nav>
  );
};

export default Navbar;
