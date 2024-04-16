import React from 'react';
import './OrderDetails.css';

const OrderDetails = () => {
    const order = {
        id: '001',
        date: '2024-04-17',
        time: '00:15:03',
        status: 'Delivered',
        customer: 'John Doe',
        items: [
            { name: 'Apples', quantity: 5, price: '$1' },
            { name: 'Oranges', quantity: 3, price: '$2' },
            { name: 'Milk', quantity: 1, price: '$3' },
        ]
    };

    return (
        <div className="order-details">
            <h2>Order Details</h2>
            <p>Order ID: {order.id}</p>
            <p>Order Date and Time: {order.date} {order.time}</p>
            <p>Order Status: {order.status}</p>
            <p>Customer: {order.customer}</p>
            <h3>Grocery Items Ordered:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {order.items.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderDetails;
