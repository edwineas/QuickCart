import React, { useState } from 'react';
import './Popup.css'; // Import your CSS file
import {Add, Remove} from '../../images/index'
const Popup = ({ imageUrl, onClose, price }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (delta) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + delta)); // Ensure quantity stays at least 1
  };

  const suBmit = () => {
    
  }

  return (
    <div className="outer">
      <div className="popup-container">
        <div className="popup">
          <button className="close-btn" onClick={onClose}>X</button>
          <img src={imageUrl} alt="Vegetable" className="vegetable-image" /> {/* Use imageUrl prop */}
          <div className="quantity-control">
            <button onClick={() => handleQuantityChange(-1)} className="incr-item"><img src={Remove} alt="-" /></button>
            <span id='qty'>{quantity}</span>
            <button onClick={() => handleQuantityChange(1)} className="decr-item"><img src={Add} alt="+" /></button>
          </div>
          <div className='vegetable-price'>
          <p>Price: &#8377;{(price * quantity).toFixed(2)}</p>
          </div>
          <button className="add-btn" onClick={suBmit}>Add to Cart ({quantity} items)</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
