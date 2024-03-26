import React, { useState } from 'react';
import './Popup.css'; // Import your CSS file

const Popup = ({ imageUrl, vegetableName, price, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (delta) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + delta)); // Ensure quantity stays at least 1
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <img src={imageUrl} alt={vegetableName} className="vegetable-image" />
        <div className="quantity-control">
          <button onClick={() => handleQuantityChange(-1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange(1)}>+</button>
        </div>
        <p className="vegetable-price">Price: &#8377;{(price * quantity).toFixed(2)}</p> {/* Display formatted total price */}
        <button className="add-to-cart" onClick={onClose}>Add to Cart ({quantity} items)</button>
      </div>
    </div>
  );
};

export default Popup;
