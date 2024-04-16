import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext'; // Make sure to adjust the path to match your file structure
import './Shops.css'; // Import CSS file if needed

function Shop({ product }) {
  const { addToCart } = useContext(CartContext);
  const [productState, setProductState] = useState({ quantity: 1, isSelectingQuantity: false });

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: productState.quantity });
    setProductState({ quantity: 1, isSelectingQuantity: false });
  };

  const handleQuantityChange = (change) => {
    setProductState(prevState => ({ ...prevState, quantity: prevState.quantity + change }));
  };

  const handleShowQuantitySelector = () => {
    setProductState(prevState => ({ ...prevState, isSelectingQuantity: true }));
  };

  // ...

  return (
    <div className="shop-item" key={product.id}>
      <img src={product.src} alt={product.name} id="shops" />
      <div className="product-name">{product.name}</div>
      {productState.isSelectingQuantity ? (
        <>
          <button onClick={() => handleQuantityChange(-1)}>-</button>
          <span>{productState.quantity}</span>
          <button onClick={() => handleQuantityChange(1)}>+</button>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </>
      ) : (
        <button onClick={handleShowQuantitySelector}>Add to Cart</button>
      )}
    </div>
  );
}

export default Shop;