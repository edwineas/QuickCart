import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cart, ShopsGrid, Popup } from "../../components";
import "./Feed.css";
import { useProducts, useShops } from "../../components/data";

function Feed() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = useProducts();
  const shops = useShops();

  const itemClick = (product) => {
    setSelectedProduct(product);
  };

  const navigate = useNavigate();

  const shopClick = (shop) => {
    navigate('/individual-shop', {
      state: {
        image: shop.image,
        name: shop.name,
        sid: shop.id,
        address: shop.address,
        rating: shop.rating,
        openTime: shop.opening_time,
        closeTime: shop.closing_time
      }
    });
  };

  return (
    <>
      <div className="feed-container">
        <div className="carousel-container">
          <div className="feed-h1">What are you looking for?</div>
          <div className="carousel">
            {products.map((product) => (
              <div className="vegies" key={product.id}>
                <img
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
        <br/>
        <div className="gridcardlist">
          <div className="feed-h1">Top shops near</div>
          <div className="grid-card-list">
            {shops.map((shop, index) => (
              <div key={index} onClick={() => shopClick(shop)} className="grid-cart" >
                <ShopsGrid
                  shopSrc={shop.image}
                  shopName={shop.name}
                  shopRating={shop.rating}
                  shopAddress={shop.address} // pass the address here
                />
              </div>
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
      )}
    </>
  );
}

export default Feed;
