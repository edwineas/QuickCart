// CartBill.jsx
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './CartBill.css';

const CartBill = () => {
  const items = {
    onion: { quantity: 1, price: 55 },
    grapes: { quantity: 1, price: 200 },
  };

  const total = Object.values(items).reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div className="billpopup">
      <CloseIcon className="close-icon" />
      <h2>Cart</h2>
      <p>{Object.keys(items).length} Items</p>
      {Object.keys(items).map((item) => (
        <div key={item} className="item">
          <p>{item}</p>
          <p>{items[item].quantity} x {items[item].price}</p>
        </div>
      ))}
      <p>Total: {total}</p>
    </div>
  );
};

export default CartBill;
