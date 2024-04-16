import React, { useState } from 'react';
import './Shops.css'; // Import CSS file if needed

const Shop = ({ product }) => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="shop-item">
      <img src={product.src} alt={product.name} id='shops'/><p>{product.name}</p>
      {count === 0 ? (
        <button type="button" onClick={handleAdd}>Add</button>
      ) : (
        <div>
          <button type="button" className='decbutton' onClick={handleMinus}>-</button>
          <span>{count}</span>
          <button type="button" className='incbutton' onClick={handleAdd}>+</button>
        </div>
      )}
    </div>
  );
};

export default Shop;