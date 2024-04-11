import React, { useState } from 'react';
import { Cart, ShopsGrid, Popup } from '../../components';
import './Feed.css';
import { Carrot, Cauliflower, Onion, sampleImage as Img } from '../../images';

const images = [
  {src:Carrot, price:60},
  {src:Cauliflower, price:45},
  {src:Onion, price:45},
  {src:Carrot, price:60},
  {src:Cauliflower, price:45},
  {src:Onion, price:45},
  {src:Carrot, price:60},
  {src:Cauliflower, price:45},
  {src:Onion, price:45},
  {src:Carrot, price:60},
  {src:Cauliflower, price:45},
  {src:Onion, price:45},
];

const shops = [
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

 // State to store the selected image



const handleClick = (shop) => {
  // Add your click handling logic here
};


function Feed() {
  const [selectedImage, setSelectedImage] = useState(null);
  const itemClick = (image) => {
    setSelectedImage(image);
    <Popup imageUrl={image.src} onClose={() => setSelectedImage(null)} /> // Update selected image on click
  };

  return (
    <>
      <div className="feed-container">
        <div className="carousel-container">
          <div className='feed-h1'>What are you looking for?</div>
          <div className="carousel">
            {images.map((image, index) => (
              <img key={index} src={image.src} alt="" className="carousel-item" onClick={() => itemClick(image.src)} />
            ))}
          </div>
        </div>
        <br />
        <div className="gridcardlist">
          <div className="feed-h1">Top shops near</div>
          <div className="grid-card-list">
            {shops.map((shop, index) => (
              <ShopsGrid key={index} shopSrc={shop.src} shopName={shop.name} shopRating={shop.rating} onClick={() => handleClick(shop)} />
            ))}
          </div>
        </div>
        <Cart />
      </div>
      {selectedImage && <Popup imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />} {/* Conditionally render Popup */}
    </>
  );
}

export default Feed;
