import React from 'react';
import './Shops.css'; // Import CSS file if needed
import Img from '../../images/sampleImage.png';
const Shop = ({ name }) => {
  return (
    <div className="shop-item">
      <img src={Img} alt={name} id='shops'/><p>{name}</p>
      <button type="button">Add</button>
    </div>
  );
};

export default Shop;
