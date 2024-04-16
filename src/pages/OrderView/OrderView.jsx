import React from 'react';
import './OrderView.css'; // Assuming you have a CSS file named OrderView.css in the same directory
import { Table } from '../../components';

const OrderView = () => {
    const dummyData = [
        { date: '2024-04-16', orderId: '123', username: 'dinesh', totalCost: '$100.00', orderDetails: 'Sample Details' },
        // Add more dummy data here
    ];

    return (
        <>
            <div className="order-view">
                <h1>OrderView</h1>
                <Table
                    titles={['Date', 'Order ID', 'User NAME', 'Total Cost']}
                    keys={['date', 'orderId', 'username', 'totalCost']}
                    data={dummyData}
                    showAction
                    actionTitle="Order Details"
                    buttonLabel="View Details"
                    onButtonClick={(row) => alert(row.orderDetails)}
                />
            </div>
        </>
    );
};

export default OrderView;
