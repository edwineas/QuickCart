import React, { useState, useEffect } from "react";
import { Cart, ShopsGrid, Popup } from "../../components";
import "./Feed.css";
import { Carrot, Cauliflower, Onion, sampleImage as Img } from "../../images";
import { useProducts,useShops } from "../../components/data";

function Feed() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = useProducts();
  const shops = useShops();
  // console.log(shops)
  
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
                  key={product.id}
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
                shopSrc={shop.image}
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
          id={selectedProduct.id}
        />
      )}{" "}
      {/* Conditionally render Popup */}
    </>
  );
}

export default Feed;
