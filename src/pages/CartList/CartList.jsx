import React from 'react'
import './CartList.css'
import CartItems from '../../components/CartItems/CartItems'

function CartList() {
    const items = [
        { productName: 'Product 1', productId: 'p1', quantity: 2 },
        { productName: 'Product 2', productId: 'p2', quantity: 1 },
        { productName: 'Product 3', productId: 'p3', quantity: 5 },
      ];
  return (
    <div className='listdiv'>
        <h1>Cart List</h1>
        <CartItems items={items} />
    </div>
  )
}

export default CartList