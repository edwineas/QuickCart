import React from 'react';
import Rating from "../../images/star_rating.svg";
import './ShopsGrid.css';
const ShopsGrid = ({ shopSrc, shopName, shopRating }) => {
  return (
    <div className="grid-card">
      <img src={shopSrc} alt={shopName} />
      <div className='shopeName'><p>{shopName}</p></div>
      <div className='shop-rating'>
      <img src={Rating} alt={`Rating: ${shopRating}` } id="starLogo" />
      {shopRating}
      </div>
    </div>
  );
};

export default ShopsGrid;

