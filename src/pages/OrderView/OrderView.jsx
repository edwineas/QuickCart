import React from 'react';
import './OrderView.css'; // Assuming you have a CSS file named OrderView.css in the same directory

const OrderView = () => {
    const dummyData = [
        { date: '2024-04-16', orderId: '123', username: 'dinesh', totalCost: '$100.00', orderDetails: 'Sample Details' },
        // Add more dummy data here
    ];

    return (
        <div className="order-view">
            <h1>OrderView</h1>
            <table className="order-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Order ID</th>
                        <th>User NAME</th>
                        <th>Total Cost</th>
                        <th>Order Details</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.date}</td>
                            <td>{data.orderId}</td>
                            <td>{data.username}</td>
                            <td>{data.totalCost}</td>
                            <td>
                                <button className="details-button" onClick={() => alert(data.orderDetails)}>View Details</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderView;
