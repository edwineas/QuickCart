import React from 'react';
import "./Navbar.css";
import { Search, Help, Profile, Logo } from '../../images';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav>
      <div className="nav-brand">
        <Link to='/'>
          <img src={Logo} id="logo" alt='' />
        </Link>
      </div>
      <div className="navbar-right">
        <button className='nav-btn'>
          <Link to='/searchpage' className='nav-link'>
            <div className="navcontents">
              <img src={Search} id="search" alt='' />Search
            </div>
          </Link>
        </button>
        <button className='nav-btn'>
          <Link to='/' className='nav-link'>
            <div className="navcontents">
              <img src={Help} id="help" alt='' />
              Help
            </div>
          </Link>
        </button>
        <button className='nav-btn'>
          <Link to='/login' className='nav-link'>
            <div className="navcontents">
              <img src={Profile} id="profile" alt='' />
            </div>
          </Link>
        </button>
      </div>

    </nav>
  );
};

export default Navbar;
