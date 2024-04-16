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
    try {
      navigate('/');
      const response = await axios.get(`http://localhost:8000/users/name/${userId}`);
      const name = response.data.name;
      setAvatarLetter(name[0].toUpperCase());
    } catch (error) {
      console.error('Failed to fetch username:', error);
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
            </div>
          {/* </Link> */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;