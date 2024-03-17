import React from 'react';
import Rating from "./images/star_rating.svg"

const GridCard = ({ imageSrc, imageName, imageRating }) => {
  return (
    <div className="grid-card">
      <img src={imageSrc} alt={imageName} />
      <p>{imageName}</p>
      <div className='rating'>
      <img src={Rating} alt={`Rating: ${imageRating}` } id="star" />
      {imageRating}
      </div>
    </div>
  );
};

export default GridCard;

