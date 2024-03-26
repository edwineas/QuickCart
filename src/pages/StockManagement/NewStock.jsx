import React, { useState } from 'react';
import './NewStock.css';

const NewStock = () => {
  const [search, setSearch] = useState('');
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleConfirm = () => {
    // Handle the confirmation logic here
    console.log(`Confirmed quantity for ${search}: ${quantity}`);
  };

  return (
    <div className="newStock-container">
      <label htmlFor="search" className="newStock-searchLabel">Search Item:</label>
      <input
        id="search"
        type="text"
        placeholder="Search item..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="newStock-searchInput"
      />
      <label htmlFor="quantity" className="newStock-quantityLabel">Quantity:</label>
      <div className="newStock-quantityControl">
        <button onClick={handleDecrease} className="newStock-decreaseButton">-</button>
        <span id="quantity" className="newStock-quantityDisplay">{quantity}</span>
        <button onClick={handleIncrease} className="newStock-increaseButton">+</button>
      </div>
      <button onClick={handleConfirm} className="newStock-confirmButton">Confirm</button>
    </div>
  );
};

export default NewStock;
