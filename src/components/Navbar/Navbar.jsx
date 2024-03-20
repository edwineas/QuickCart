import React from 'react';
import "./Navbar.css";
import Search from "../../images/search.svg";
import Help from "../../images/help.svg";
import Profile from "../../images/profile.svg";
import Logo from "../../images/logo.svg";
import { useNavigate } from 'react-router';
const Navbar = ({ onSearchClick }) => {
  const navigate = useNavigate();
  return (
    <div>
      <img src={Logo} id="logo" alt='' />
      <div className="navbar">
        <button onClick={onSearchClick}>
          <div className="navcontents" onClick={() => navigate('/shop-list')}>
            <img src={Search} id="search" alt='' />Search
          </div>
        </button>
        {/* <Link to="/shop-list">Shop List</Link> Use Link for other navigation */}
        <button><div className="navcontents"><img src={Help} id="help" alt='' />Help</div></button>
        <button><div className="navcontents"><img src={Profile} id="profile" alt='' />{/*Sign In*/}</div></button>
      </div>
      <hr />
      <br />
      <br />
    </div>
  );
};

export default Navbar;
