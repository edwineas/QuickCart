import React, { useState } from 'react'
import './CartItems.css'

function CartItems({ items }) {
  const [quantities, setQuantities] = useState(items.map(item => item.quantity))

  const handleIncrease = index => {
    setQuantities(prevQuantities => {
      const updatedQuantities = [...prevQuantities]
      updatedQuantities[index]++
      return updatedQuantities
    })
  }

  const handleDecrease = index => {
    setQuantities(prevQuantities => {
      if (prevQuantities[index] > 0) {
        const updatedQuantities = [...prevQuantities]
        updatedQuantities[index]--
        return updatedQuantities
      }
      return prevQuantities
    })
  }

  return (
    <div>
      {items && items.map((item, index) => (
        <div className="cart-item" key={item.productId}>
          <h2>{item.productName}</h2>
          <p>Quantity: {quantities[index]}</p>
          <div className='action'>
            <button onClick={() => handleDecrease(index)}>-</button>
            <button onClick={() => handleIncrease(index)}>+</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CartItems