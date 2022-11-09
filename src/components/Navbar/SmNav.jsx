import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import NavItems from "./NavItems";
const SmNav = () => {
  const [open, setOpen] = useState(false);

  const menuIcon = <IoMenu size="1.5rem" onClick={() => setOpen(!open)} />;
  const closeIcon = <IoClose size="1.5rem" onClick={() => setOpen(!open)} />;

  // if any link is clicked close the the menu
  const closeMenu = () => setOpen(false);

  return (
    <div className="smNav">
      {open ? closeIcon : menuIcon}
      {open && <NavItems isSmNav={true} closeMenu={closeMenu} />}
    </div>
  );
};

export default SmNav;
