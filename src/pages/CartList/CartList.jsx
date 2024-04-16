import React, { useContext } from 'react'
import './CartList.css'
import { CartItems } from '../../components';
import { CartContext } from '../../components/CartContext';

function CartList() {
    const { cart } = useContext(CartContext);

    return (
        <div className='listdiv'>
            <h1>Cart List</h1>
            <CartItems items={cart} />
        </div>
    )
}

export default CartList