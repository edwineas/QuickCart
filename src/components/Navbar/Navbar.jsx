import "./Navbar.css";
import { Search, Help, Logo } from '../../images';
import { Link, useNavigate } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const [avatarLetter, setAvatarLetter] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const userId = localStorage.getItem('userid'); // replace with your actual userId

  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loginStatus === 'true');
  }, []);

  const handleAvatarClick = async () => {
    if (!isLoggedIn) {
      window.location.href = '/login';
      return;
    }
    else {
      try {
        setDropdownVisible(!isDropdownVisible);
        const response = await axios.get(`http://localhost:8000/users/name/${userId}`);
        const name = response.data.name;
        setAvatarLetter(name[0].toUpperCase());
      } catch (error) {
        console.error('Failed to fetch username:', error);
      }
    }
  };
  const DropdownMenu = () => {
    const role = localStorage.getItem('role');
    console.log('role', role)


    if (role === 'customer') {
      return (
        <div className="dropdown-menu">
          <ul>
            <Link to="/order" className="menulink">
              <li>Orders</li>
            </Link>
            <Link to="/logout" className="menulink">
              <li onClick={setAvatarLetter()}>Logout</li>
            </Link>
          </ul>
        </div>
      );
    } else if (role === 'shopkeeper') {
      return (
        <div className="dropdown-menu">
          <ul>
            <Link to="/inventory" className="menulink">
              <li>Inventory</li>
            </Link>
            <Link to="/order-view" className="menulink">
              <li>Past Orders</li>
            </Link>
            <Link to="/logout" className="menulink">
              <li onClick={setAvatarLetter()}>Logout</li>
            </Link>
          </ul>
        </div>
      );
    }
    else {
      return (
        <div className="dropdown-menu">
          <ul>
            <Link to="/logout" className="menulink">
              <li onClick={setAvatarLetter()}>
                Logout
              </li>
            </Link>
          </ul>
        </div>
      );
    }
  };
  return (
    <nav>
      <Link to='/'>
        <img src={Logo} id="logo" alt='' />
      </Link>
      <div className="navbar-right">
        <button className='nav-btn'>
          <Link to='/searchpage' className='nav-link'>
            <div className="navcontents">
              <img src={Search} id="search" alt='' />Search
            </div>
          </Link>
        </button>
        <button className='nav-btn'>
          <Link to='/help' className='nav-link'>
            <div className="navcontents">
              <img src={Help} id="help" alt='' />
              Help
            </div>
          </Link>
        </button>
        <button className='nav-btn'>
          {/* <Link to={'/login'} className='nav-link'> */}
          <div className="navcontents">
            <Avatar id='profile' onClick={handleAvatarClick}>
              {avatarLetter ? avatarLetter : <PersonIcon />}
            </Avatar>
            {isDropdownVisible && <DropdownMenu />}
          </div>
          {/* </Link> */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;