import React from "react";
import { LOGO_URL } from "../../utils/constants";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-cotainer">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>CardS</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
