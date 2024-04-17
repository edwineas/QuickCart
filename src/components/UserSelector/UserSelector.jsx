import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './UserSelector.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const UserSelector = () => {
  const [shopkeeper, setShopkeeper] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleCustomerClick = () => {
    setShopkeeper(false);
    navigate('/registercustomer'); // Navigate to '/registercustomer' path
  };

  const handleShopkeeperClick = () => {
    setShopkeeper(true);
    navigate('/registershopkeeper'); // Navigate to '/registershop' path
  };

  const [alignment, setAlignment] = React.useState('web');
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div className='user-selector'>
      <div className='inner-box'>  
        <div className='qn'> <p>What's your role?</p> </div>
        <div className='desc'><p>Choose your role.If you want to buy items, kindly choose "Customer". If you want to sell items, kindly choose "Shopkeeper".</p></div>
        <div className='options'>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton
            onClick={handleCustomerClick} style={{ 
            backgroundColor: '#435BDA', 
            color: '#ffffff',
            border: '2px solid white',
            borderRadius: '15px',
            marginRight: '10px'
  }}>Customer</ToggleButton>
          <ToggleButton
            onClick={handleShopkeeperClick} style={{ 
            backgroundColor: '#435BDA', 
            color: '#ffffff',
            border: '2px solid white',
            borderRadius: '15px',
            marginLeft: '10px'
  }}>Shopkeeper</ToggleButton>
        </ToggleButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default UserSelector;