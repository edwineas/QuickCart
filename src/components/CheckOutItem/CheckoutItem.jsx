import React from 'react';
import './CheckoutItem.css'; // Import your CSS file
import Rating from '../../images/star_rating.svg'; // Import your image file
import Add from '../../images/add.svg';
import Remove from '../../images/remove.svg';

const CheckoutItem = ({ name, number, itemName, quantity, price, starRating, onQuantityChange }) => {
  const handleQuantityIncrement = () => {
    onQuantityChange(quantity + 1);
  };

  const handleQuantityDecrement = () => {
    if (quantity > 0) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <>
      <br />
      <div className='item-box'>
        <div>{name}</div>
        <div className='rating'>
        <img src={Rating} alt={`Rating: ${starRating}`} id="star" />
        {starRating}
        </div>
        <div className='item-row'>
          {number} {itemName}
          <div className='quantity-control'>
            <button id='Add' onClick={handleQuantityIncrement}><img src={Add} alt=''></img></button>
            <span id='sp'>{quantity}</span>
            <button id='Remove' onClick={handleQuantityDecrement}><img src={Remove} alt=''></img></button>
          </div>
          {price}
        </div>
        <div className='total'>
          <div></div>
          Total: {quantity * price}
        </div>
      </div>
    </>
  );
};

export default CheckoutItem;
