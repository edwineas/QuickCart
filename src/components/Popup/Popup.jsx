import React, { useState, useContext } from 'react';
import { CartContext } from '../CartContext';
import './Popup.css'; // Import your CSS file
import { Add, Remove } from '../../images/index'; // Assuming these are image imports

const Popup = ({ imageUrl, onClose, name, id }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (delta) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + delta));
  };

  const handleSubmit = () => {
    addToCart({ id, name, quantity });
    // // Implement logic to add item to cart using the current quantity
    // // You can access quantity, name, id, etc. from here
    // console.log('Adding item to cart:', { quantity, name, id }); // Example logging
    onClose(true);
  };

  return (
    <div className="outer">
      <div className="popup-container">
        <div className="popup">
          <button className="close-btn" onClick={onClose}>
            X
          </button>
          <img src={imageUrl} alt="Vegetable" className="vegetable-image" />
          <center>
            <div>{name}</div>
          </center>
          <div className="quantity-control">
            <button onClick={() => handleQuantityChange(-1)} className="incr-item">
              <img src={Remove} alt="-" />
            </button>
            <span id="qty">{quantity}</span>
            <button onClick={() => handleQuantityChange(1)} className="decr-item">
              <img src={Add} alt="+" />
            </button>
          </div>
          <center>
            <button className="add-btn" onClick={handleSubmit}>
              Add to Cart ({quantity} items)
            </button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Popup;
