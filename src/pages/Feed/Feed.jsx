import React, { useState } from "react";
import { Cart, ShopsGrid, Popup } from "../../components";
import "./Feed.css";
import { Carrot, Cauliflower, Onion, sampleImage as Img } from "../../images";

const products = [
  { src: Carrot,name: "Carrot", price: 60 },
  { src: Cauliflower,name: "Cauliflower", price: 45 },
  { src: Onion,name: "Onion", price: 45 },
  { src: Carrot,name: "Carrot", price: 60 },
  { src: Cauliflower,name: "Cauliflower", price: 45 },
  { src: Onion,name: "Onion", price: 45 },
  { src: Carrot,name: "Carrot", price: 60 },
  { src: Cauliflower,name: "Cauliflower", price: 45 },
  { src: Onion,name: "Onion", price: 45 },
  { src: Carrot,name: "Carrot", price: 60 },
  { src: Cauliflower,name: "Cauliflower", price: 45 },
  { src: Onion,name: "Onion", price: 45 },
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
  const [selectedProduct, setSelectedProduct] = useState(null);

  const itemClick = (product) => {
    setSelectedProduct(product); // Update selected image on click
  };

  return (
    <>
      <div className="feed-container">
        <div className="carousel-container">
          <div className="feed-h1">What are you looking for?</div>
          <div className="carousel">
            
              {products.map((product, index) => (
                <div className="vegies">
                <img
                  key={index}
                  src={product.src}
                  alt={product.name}
                  className="carousel-item"
                  onClick={() => itemClick(product)}
                />
                <div className="item-name">{product.name}</div>
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
      {selectedProduct && (
        <Popup
          imageUrl={selectedProduct.src}
          name={selectedProduct.name}
          onClose={() => setSelectedProduct(null)}
        />
      )}{" "}
      {/* Conditionally render Popup */}
    </>
  );
}

export default Feed;
