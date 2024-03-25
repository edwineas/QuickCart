import React from 'react';
import Rating from "../../images/star_rating.svg";
import './ShopsGrid.css';
const ShopsGrid = ({ shopSrc, shopName, shopRating }) => {
  return (
    <div className="grid-card">
      <img src={shopSrc} alt={shopName} />
      <p className='shopeName'>{shopName}</p>
      <div className='rating'>
      <img src={Rating} alt={`Rating: ${shopRating}` } id="star" />
      {shopRating}
      </div>
    </div>
  );
};

export default ShopsGrid;

