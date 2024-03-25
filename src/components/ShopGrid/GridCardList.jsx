import React from 'react';
import GridCard from './GridCard';
import './Grid.css';
import Img from '../../images/sampleImage.png';
const GridCardList = () => {
  const images = [
    { src: Img, name: 'Elite Supermarket 1', rating: 4.5 },
    { src: Img, name: 'Elite Supermarket 2', rating: 3.8 },
    { src: Img, name: 'Elite Supermarket 3', rating: 4.2 }, 
    { src: Img, name: 'Elite Supermarket 1', rating: 4.5 },
    { src: Img, name: 'Elite Supermarket 2', rating: 3.8 },
    { src: Img, name: 'Elite Supermarket 3', rating: 4.2 },
    { src: Img, name: 'Elite Supermarket 1', rating: 4.5 },
    { src: Img, name: 'Elite Supermarket 2', rating: 3.8 },
    { src: Img, name: 'Elite Supermarket 3', rating: 4.2 }, 
    { src: Img, name: 'Elite Supermarket 1', rating: 4.5 },
    { src: Img, name: 'Elite Supermarket 2', rating: 3.8 },
    { src: Img, name: 'Elite Supermarket 3', rating: 4.2 },
    // Add more image objects here
  ];

  const handleClick = (image) => {
    // Add your click handling logic here
  };

  return (
    <>
      <div className="qn">Top shops near</div>
      <br></br>
      <div className="grid-card-list">
        {images.map((image, index) => (
          <GridCard key={index} imageSrc={image.src} imageName={image.name} imageRating={image.rating} onClick={() => handleClick(image)} />
        ))}
      </div>
    </>
  );
};

export default GridCardList;
