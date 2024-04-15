import React, { useState } from "react";
import { Cart, ShopsGrid, Popup } from "../../components";
import "./Feed.css";
import { Carrot, Cauliflower, Onion, sampleImage as Img } from "../../images";

const images = [
  { src: Carrot, name: "Carrot" },
  { src: Cauliflower, name: "Cauliflower" },
  { src: Onion, name: "Onion" },
  { src: Carrot, name: "Carrot" },
  { src: Cauliflower, name: "Cauliflower" },
  { src: Onion, name: "Onion" },
  { src: Carrot, name: "Carrot" },
  { src: Cauliflower, name: "Cauliflower" },
  { src: Onion, name: "Onion" },
  { src: Carrot, name: "Carrot" },
  { src: Cauliflower, name: "Cauliflower" },
  { src: Onion, name: "Onion" },
];

const shops = [
  { src: Img, name: "Elite Supermarket 1", rating: 4.5 },
  { src: Img, name: "Elite Supermarket 2", rating: 3.8 },
  { src: Img, name: "Elite Supermarket 3", rating: 4.2 },
  { src: Img, name: "Elite Supermarket 1", rating: 4.5 },
  { src: Img, name: "Elite Supermarket 2", rating: 3.8 },
  { src: Img, name: "Elite Supermarket 3", rating: 4.2 },
  { src: Img, name: "Elite Supermarket 1", rating: 4.5 },
  { src: Img, name: "Elite Supermarket 2", rating: 3.8 },
  { src: Img, name: "Elite Supermarket 3", rating: 4.2 },
  { src: Img, name: "Elite Supermarket 1", rating: 4.5 },
  { src: Img, name: "Elite Supermarket 2", rating: 3.8 },
  { src: Img, name: "Elite Supermarket 3", rating: 4.2 },
];

function Feed() {
  const [selectedImage, setSelectedImage] = useState(null);

  const itemClick = (image) => {
    setSelectedImage(image.src); // Update selected image on click
  };

  return (
    <>
      <div className="feed-container">
        <div className="carousel-container">
          <div className="feed-h1">What are you looking for?</div>
          <div className="carousel">
            
              {images.map((image, index) => (
                <div className="vegies">
                <img
                  key={index}
                  src={image.src}
                  alt=""
                  className="carousel-item"
                  onClick={() => itemClick(image)}
                />
                <div className="item-name">{image.name}</div>
                </div>
              ))}
            
          </div>
        </div>
        <br />
        <div className="gridcardlist">
          <div className="feed-h1">Top shops near</div>
          <div className="grid-card-list">
            {shops.map((shop, index) => (
              <ShopsGrid
                key={index}
                shopSrc={shop.src}
                shopName={shop.name}
                shopRating={shop.rating}
              />
            ))}
          </div>
        </div>
        <Cart />
      </div>
      {selectedImage && (
        <Popup
          imageUrl={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}{" "}
      {/* Conditionally render Popup */}
    </>
  );
}

export default Feed;
