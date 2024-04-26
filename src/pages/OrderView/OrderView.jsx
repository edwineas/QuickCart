import React, { useEffect, useState } from 'react';
import './OrderView.css'; // Assuming you have a CSS file named OrderView.css in the same directory
import { Table } from '../../components';
import { useNavigate } from 'react-router-dom';

const OrderView = () => {
    const [shoporders, setShopOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_DJANGO_URL}/orders/shop/13/`);
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
                        customer_id: item.customer_id, // Added customer_id
                        order_shop_id: item.id,
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
                    keys={['order', 'date', 'customer_name', 'shop_price', 'status']}
                    data={shoporders}
                    showAction
                    actionTitle="Order Details"
                    buttonLabel="View Details"
                    onButtonClick={(row) => {
                        navigate("/orderdetails", { 
                            state: { 
                                order_shop_id: row.order_shop_id,
                                order: row.order, 
                                customer_name: row.customer_name, 
                                date: row.date, 
                                shop_price: row.shop_price, 
                                status: row.status,
                                customer_id: row.customer_id, // Added customer_id
                            }
                        });
                    }}
                />
            </div>
        </>
    );
};

export default OrderView;