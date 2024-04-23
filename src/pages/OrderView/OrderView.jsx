import React, { useEffect, useState } from 'react';
import './OrderView.css'; // Assuming you have a CSS file named OrderView.css in the same directory
import { Table } from '../../components';

const OrderView = () => {
    const [shoporders, setShopOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch('http://localhost:8000/orders/shop/13/');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                const dataWithStatus = data.map(item => {
                    const date = new Date(item.date);
                    const formattedDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
                    return {
                        order: item.order,
                        shop_price: item.shop_price,
                        status: !item.packet_picked ? 'Waiting for Pickup' : !item.payment_received ? 'Waiting for Payment' : 'Complete',
                        date: formattedDate,
                        customer_name: item.customer_name,
                    };
                });
                setShopOrders(dataWithStatus);
            } catch (error) {
                console.error('Failed to fetch orders:', error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <>
            <div className="order-view">
                <h1>OrderView</h1>
                <Table
                    titles={['Order ID', 'Date', 'Customer Name', 'Price', 'Status']}
                    keys={['order','date', 'customer_name', 'shop_price', 'status']}
                    data={shoporders}
                    showAction
                    actionTitle="Order Details"
                    buttonLabel="View Details"
                    onButtonClick={(row) => alert(JSON.stringify(row))}
                />
            </div>
        </>
    );
};

export default OrderView;