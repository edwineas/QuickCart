import React from 'react';
import './CheckoutItem.css';
import Rating from '../../images/star_rating.svg' // Import your CSS file

const ShopNames = [
    'Shop 1',
    'Shop 2',
    'Shop 3',
    'Shop 4',
    'Shop 5',
    'Shop 6',
    'Shop 7',
    'Shop 8',
    'Shop 9',
    'Shop 10',
];

const CheckoutItem = ({ name, quantity, price, starRating, onQuantityChange }) => {
  const handleQuantityIncrement = () => {
    onQuantityChange(quantity + 1);
  };

  const handleQuantityDecrement = () => {
    if (quantity > 0) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="checkout-item">
      <img src={Rating} alt="Star Rating" className="star-rating" /> {/* Replace with your star rating image path */}
      <div className="item-details">
        <p>{name}</p>
        <p>&#8377;{(price * quantity).toFixed(2)}</p> {/* Display formatted total price */}
      </div>
      <div className="quantity-control">
        <button onClick={handleQuantityDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={handleQuantityIncrement}>+</button>
      </div>
    </div>
  );
};

export default CheckoutItem;
