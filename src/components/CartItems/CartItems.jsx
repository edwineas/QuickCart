import React, { useContext } from 'react'
import { CartContext } from '../CartContext'; // Make sure to adjust the path to match your file structure
import './CartItems.css'; // Import CSS file if needed

function CartItems({ items = [] }) {
  const { increaseQuantity, decreaseQuantity } = useContext(CartContext);

  return (
    <div>
      {Array.isArray(items) && items.map((item, index) => (
        <div className="cart-item" key={item.id}>
          <h2 >{item.name}</h2>
          <p>Quantity: {item.quantity}</p>
          <div className='action'>
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <button onClick={() => increaseQuantity(item.id)}>+</button>
          </div>
        </div>
      ))}
      {(!Array.isArray(items) || items.length === 0) && <p className="cart-item p">No items in the cart</p>}
    </div>
  )
}

export default CartItems