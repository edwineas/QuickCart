import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './UserSelector.css';

const UserSelector = () => {
  const [shopkeeper, setShopkeeper] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleCustomerClick = () => {
    setShopkeeper(false);
    navigate('/registercustomer'); // Navigate to '/registercustomer' path
  };

  const handleShopkeeperClick = () => {
    setShopkeeper(true);
    navigate('/registershop'); // Navigate to '/registershop' path
  };

  return (
    <div className='user-selector'>
      <div className='inner-box'>  
        <div className='qn'> <p>What's your role?</p> </div>
        <div className='options'>
          <button className='sButton' onClick={handleCustomerClick}>Customer</button>
          <button className='sButton' onClick={handleShopkeeperClick}>Shopkeeper</button>
        </div>
      </div>
    </div>
  );
};

export default UserSelector;