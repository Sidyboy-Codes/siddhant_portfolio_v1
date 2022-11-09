import React from "react";

import { MdDownloading } from "react-icons/md";

const NavItems = (props) => {
  return (
    <ul className="nav_items">
      <li onClick={() => props.isSmNav && props.closeMenu()}>
        <a href="#about">About</a>
      </li>

      <li onClick={() => props.isSmNav && props.closeMenu()}>
        <a href="#skill">Skills</a>
      </li>

      <li onClick={() => props.isSmNav && props.closeMenu()}>
        <a href="#project">Projects</a>
      </li>

      <li onClick={() => props.isSmNav && props.closeMenu()}>
        <a href="#contact">Contact</a>
      </li>

      <li onClick={() => props.isSmNav && props.closeMenu()}>
        <a href={"./assets/SIDDHANT_PATEL_Resume.pdf"} download className="btn">
          Resume <MdDownloading />
        </a>
      </li>
    </ul>
  );
};

export default NavItems;
