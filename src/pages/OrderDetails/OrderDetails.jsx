import React from 'react';
import './OrderDetails.css';

const OrderDetails = () => {
    const order = {
        id: '001',
        date: '2024-04-17',
        time: '00:15:03',
        status: 'Delivered',
        customer: {
            name: 'John Doe',
            username: 'johndoe',
            phoneNumber: '123-456-7890',
            email: 'johndoe@example.com'
        },
        items: [
            { name: 'Apples', quantity: 5, price: 100 },
            { name: 'Oranges', quantity: 3, price: 200 },
            { name: 'Milk', quantity: 1, price: 300 },
        ],
        total: 1000,
        paymentMethod: 'Cash on Delivery'
    };

    return (
        <div className="order-details">
            <h2>Order Details</h2>
            <div className="section">
                <h3>Order Information</h3>
                <p><strong>Order ID:</strong> {order.id}</p>
                <p><strong>Order Date and Time:</strong> {order.date} {order.time}</p>
                <p><strong>Order Status:</strong> {order.status}</p>
            </div>
            <div className="section">
                <h3>Customer Information</h3>
                <p><strong>Name:</strong> {order.customer.name}</p>
                <p><strong>Username:</strong> {order.customer.username}</p>
                <p><strong>Phone Number:</strong> {order.customer.phoneNumber}</p>
                <p><strong>Email:</strong> {order.customer.email}</p>
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
                    <tbody>
                        {order.items.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>₹{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="section">
                <h3>Payment and Delivery Information</h3>
                <p><strong>Order Total:</strong> ₹{order.total}</p>
                <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
            </div>
        </div>
    );
};

export default OrderDetails;
