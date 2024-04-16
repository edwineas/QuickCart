import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import './CartList.css'
import { CartItems } from '../../components';
import { CartContext } from '../../components/CartContext';

function CartList() {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/cart-page')
    }


    return (
        <>
            <div className='listdiv'>
                <h1>Cart List</h1>
                <CartItems items={cart} />
            </div>
            <div className="bttn">
                <button type="submit" className='sbtn' onClick={handleClick}>Submit</button>
            </div>
        </>

    )
}

export default CartList