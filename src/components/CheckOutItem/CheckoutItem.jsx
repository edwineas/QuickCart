import React from 'react';
import './CheckoutItem.css';
import Rating from '../../images/star_rating.svg';

const CheckoutItem = ({ shop }) => {
  // Calculate total price for all products in the shop
  return (
    <div className='item-box'>
      <div>{shop.shop_name}</div>
      <div className='rating'>
        <img src={Rating} alt={`Rating: ${shop.shop_rating}`} id="star" />
        {shop.shop_rating}
      </div>
      {shop.products.map((product, index) => (
        <div key={index} className='item-row'>
          <div>{index + 1} </div>
          <div>{product.product}</div>
          <div>{product.quantity}</div>
          <div>{product.price}</div>
        </div>
      ))}
      <div className='total'>
        Total: {shop.total_price}
      </div>
    </div>
  );
};

export default CheckoutItem;