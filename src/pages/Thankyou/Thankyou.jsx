import React from 'react';
import './Thankyou.css';
import { Carrot, Cauliflower, Onion, sampleImage as Img } from '../../images';

const App = () => {
  return (
    <div className="thankyou-container">
      <h1 className="thankyou-heading">Thank you for your purchase!</h1>
      <p className="thankyou-message">Your order will be processed within 5 minutes. We will notify you by email once your order is ready to deliver.</p>
      <div className="thankyou-sub-container">
        <div className="thankyou-left-section">
            <h2 className="order-details-heading">Order Details</h2>
            <p className="order-detail"><span className="order-detail-label">ID:</span> 123456</p>
            <p className="order-detail"><span className="order-detail-label">Name:</span> Sumesh P P</p>
            <p className="order-detail"><span className="order-detail-label">Phone number:</span> 8569235569</p>
            <p className="order-detail"><span className="order-detail-label">Email:</span> sumesh23@gmail.com</p>
            <button className="order-details-button">View order details</button>
        </div>
        <div className="thankyou-right-section">
          <img src="\images\thankyou_img.png" alt="Thank You" className="thankyou-image" />
        </div>
      </div>
    </div>
  );
};

export default App;
