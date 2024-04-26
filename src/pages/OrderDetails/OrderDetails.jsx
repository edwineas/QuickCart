import React, { useEffect, useState } from 'react';
import './OrderDetails.css';
import { useLocation } from 'react-router-dom';

const OrderDetails = () => {
    // const orderdata = {
    //     id: '001',
    //     date: '2024-04-17',
    //     time: '00:15:03',
    //     status: 'Delivered',
    //     customer: {
    //         name: 'John Doe',
    //         username: 'johndoe',
    //         phoneNumber: '123-456-7890',
    //         email: 'johndoe@example.com'
    //     },
    //     items: [
    //         { name: 'Apples', quantity: 5, price: 100 },
    //         { name: 'Oranges', quantity: 3, price: 200 },
    //         { name: 'Milk', quantity: 1, price: 300 },
    //     ],
    //     total: 1000,
    //     paymentMethod: 'Cash on Delivery'
    // };
    const location = useLocation();
    const { order, customer_name, date, shop_price, status, customer_id,order_shop_id } = location.state || {};
    const [customer, setCustomer] = useState({});
    const [orderProducts, setOrderProducts] = useState([]);

    useEffect(() => {
        const fetchCustomer = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_DJANGO_URL}/users/customer/${customer_id}/`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setCustomer(data);
            } catch (error) {
                console.error('Failed to fetch customer:', error);
            }
        };

        fetchCustomer();
    }, []);

    useEffect(() => {
        const fetchOrderProducts = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_DJANGO_URL}/orders/products/${order_shop_id}/`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setOrderProducts(data);
            } catch (error) {
                console.error('Failed to fetch order products:', error);
            }
        };
    
        fetchOrderProducts();
    }, [order_shop_id]);

    return (
        <div className="order-details">
            <h2>Order Details</h2>
            <div className="section">
                <h3>Order Information</h3>
                <p><strong>Order ID:</strong> {order}</p>
                <p><strong>Order Date and Time:</strong> {date} {order.time}</p>
                <p><strong>Order Status:</strong> {status}</p>
            </div>
            <div className="section">
                <h3>Customer Information</h3>
                <p><strong>Name:</strong> {customer.first_name} {customer.last_name}</p>
                <p><strong>Phone Number:</strong> {customer.phone_number}</p>
                <p><strong>Email:</strong> {customer.email}</p>
            </div>
            <div className="section">
                <h3>Grocery Items Ordered:</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price (INR)</th>
                        </tr>
                    </thead>
                    {console.log(orderProducts)}
                    <tbody>
                        {orderProducts.map((product, index) => (
                            <tr key={index}>
                                <td>{product.product_name}</td>
                                <td>{product.product_quantity}</td>
                                <td>{product.product_price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="section">
                <h3>Payment and Delivery Information</h3>
                <p><strong>Order Total:</strong> ₹{shop_price}</p>
                <p><strong>Payment Method:</strong> Cash on Pickup</p>
            </div>
        </div>
    );
};

export default OrderDetails;