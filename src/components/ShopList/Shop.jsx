import React from 'react';
import './Shops.css'; // Import CSS file if needed

const Shop = ({ product }) => {
  return (
    <div className="shop-item">
      <img src={product.src} alt={product.name} id='shops'/><p>{product.name}</p>
      <button type="button">Add</button>
    </div>
  );
};

export default Shop;