import React from 'react';
import './Thankyou.css';
import { Thankimg } from '../../images';
import { useNavigate } from 'react-router-dom';

const Thankyou = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/order')
  }
  return (
    <div className="thankyou-container">
      <h1 className="thankyou-heading">Thank you for your purchase!</h1>
      <p className="thankyou-message">Your order will be processed within 5 minutes. We will notify you by email once your order is ready to deliver.</p>
      <div className="thankyou-sub-container">
        <div className="thankyou-left-section">
            <button className="order-details-button" onClick={handleClick}>View order details</button>
        </div>
        <div className="thankyou-right-section">
          <img src={Thankimg} alt="Thank You" className="thankyou-image" />
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
