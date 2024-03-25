import React from 'react';
import Shop from './Shop'; // Import the child component
import './Shops.css'; // Import CSS file if needed

const shops = [
  { name: 'Elite Supermarket' },
  { name: 'Fresh Choice' },
  { name: 'Super Saver' },
  { name: 'Elite Supermarket' },
  { name: 'Fresh Choice' },
  { name: 'Super Saver' },
  { name: 'Elite Supermarket' },
  { name: 'Fresh Choice' }
  // Add more shops to the list
];

const Shops = () => {
  return (
    <div className="shops-container">
      {shops.map((shop) => (
        <Shop key={shop.name} name={shop.name} /> // Pass shop details as props
      ))}
    </div>
  );
};

export default Shops;
