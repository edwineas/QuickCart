import React from 'react';
import Shop from './Shop'; // Import the child component
import './Shops.css'; // Import CSS file if needed

const Shops = ({ products }) => {
  return (
    <div className="shops-container">
      {products.map((product) => (
        <Shop key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shops;