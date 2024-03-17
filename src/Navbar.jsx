import React from 'react';
import "./Navbar.css";
import Search from "./images/search.svg";
import Help from "./images/help.svg";
import Profile from "./images/profile.svg";
import Logo from "./images/logo.svg";

const Navbar = ({ onSearchClick, onLogoClick }) => { // Add onLogoClick prop for logo functionality
  return (
    <div>
      <img src={Logo} id="logo" onClick={onLogoClick} /> {/* Add onClick handler for logo */}
      <div className="navbar">
        <button onClick={onSearchClick}>
          <div className="navcontents"><img src={Search} id="search" />Search</div>
        </button>
        <button><div className="navcontents"><img src={Help} id="help" />Help</div></button>
        <button><div className="navcontents"><img src={Profile} id="profile" />Sign In</div></button>
      </div>
      <hr />
      <br />
      <br />
    </div>
  );
};

export default Navbar;
