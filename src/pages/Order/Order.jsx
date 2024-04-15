import React from 'react';
import './Order.css'; // Import your custom CSS file to make the page attractive

const Order = () => {
  // Sample data
  const orders = [
    { id: '123', date: '2022-01-01', totalCost: '$100.00' },
    { id: '124', date: '2022-01-02', totalCost: '$200.00' },
    { id: '125', date: '2022-01-03', totalCost: '$300.00' }
  ];

  const viewDetails = (orderId) => {
    // Add your logic to view the details of the order
    alert(`Viewing details for order ${orderId}`);
  }

  return (
    <div className="order">
      <h1>Order History</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Order ID</th>
            <th>Total Cost</th>
            <th>Order Details</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.date}</td>
              <td>{order.id}</td>
              <td>{order.totalCost}</td>
              <td><button onClick={() => viewDetails(order.id)}>View Details</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Order;
