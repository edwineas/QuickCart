import React from 'react';
import { useLocation } from 'react-router-dom';
import './CartBill.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

const CartBill = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const mappedShops = location.state.mappedShops;

    const handleClick = async () => {
        const customerId = localStorage.getItem('customerId');
        const totalPrice = mappedShops.reduce((total, shop) => total + Number(shop.total_price), 0);

        const orderData = {
            customer_id: customerId,
            total_price: totalPrice,
            shops: mappedShops.map(shop => ({
                shop_id: shop.shop.id,
                shop_total_price: shop.total_price,
                shop_name: shop.shop.name,
                products: shop.products.map(product => ({
                    product_id: product.id, // Assuming the product object has an id field
                    product_name: product.product,
                    product_price: product.price,
                    product_quantity: product.quantity
                }))
            }))
        };
        let orderId;
        try {
            console.log(JSON.stringify(orderData));
            const response = await fetch(`${process.env.REACT_APP_DJANGO_URL}/orders/create/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData)
            });
        
            const data = await response.json();
        
            if (response.status === 201) {
                orderId = data.orderid;
                console.log(data.message); // "Order created successfully"
                navigate('/postorder', { state: { orderId } });
            } else if (response.status === 400 || response.status === 500) {
                console.error(data.error); // Log the error message
            } else {
                console.error('Unexpected response:', data);
            }
        } catch (error) {
            console.error('Failed to create order:', error);
        }
    }

    return (
        <div className="bill-container">
            <div className="cart-head">
                <h1 className="cart-title"> OrderBill</h1>
            </div>
            {mappedShops.map((shop, index) => (
                <div className="item-container" key={index}>
                    <h2 className="store-name">{shop.shop_name}</h2>
                    {shop.products.map((product, index) => (
                        <div className="item-view" key={index}>
                            <p className="item-name">{product.product}</p>
                            <div className="itemaddprice">
                                <p className="quantity">{product.quantity}</p>
                                <p className="item-price">₹{product.price}</p>
                            </div>
                        </div>
                    ))}
                    <div className="shopbillitem">
                        <p className="shop-total">Shop Total: </p>
                        <p>₹{shop.total_price}</p>
                    </div>
                </div>
            ))}
            <div className="bill-details-container">
                <div className="billitem">
                    <p className="bill-final-total">Total</p>
                    <p className="bill-final-total">₹{
                        mappedShops.reduce((total, shop) => total + Number(shop.total_price), 0)
                    }</p>
                </div>
            </div>
            <button className="continue-button" onClick={handleClick}>Continue</button>
        </div>
    );
}

export default CartBill;