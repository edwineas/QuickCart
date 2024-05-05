import React, { useState, useEffect } from 'react';
import './PostOrder.css'; // Import your custom CSS file to make the page attractive
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

// Create a functional component named PostOrder
const PostOrder = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { orderId } = location.state;
  const [orders, setOrders] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const postOrder = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_DJANGO_URL}/orders/postorder/${orderId}/`);
        console.log('Order posted:', response.data);
        setOrders(response.data.shops);
      } catch (error) {
        console.error('Error posting order:', error);
      }
    };
    console.log('order', orders)
    postOrder();
  }, [orderId, reload]);

  const handlePacket = async (ordershopid) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_DJANGO_URL}/orders/packet/${ordershopid}/`);
      console.log('Packet picked:', response.data);
      setReload(!reload); // Toggle the reload state
    } catch (error) {
      console.error('Error picking packet:', error);
    }
  }

  const handlePayment = async (ordershopid) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_DJANGO_URL}/orders/checkpayment/${ordershopid}/`);
      console.log('Payment checked:', response.data);
      if (response.data.payment_received === true) {
        setReload(!reload); // Toggle the reload state
      }
    } catch (error) {
      console.error('Error checking payment:', error);
    }
  }

  return (
    <div className="postorder">
      <h1>Shop Proximity</h1>
      {orders.map((shop, index) => (
        <div key={index} className="shop-card">
          <h3>{shop.shop_name}</h3>
          {shop.products.map((item, index) => (
            <div key={index} className="item">
              <span>{item.product_name}</span>
              <div className='itemqp'>
                <span>{item.product_quantity}</span>
                <span>{item.product_price}</span>
              </div>
            </div>
          ))}
          <div className='totaldiv'><p className="total">Total: {shop.shop_price}</p></div>
          <div className='statusdiv'>
            <button
              className={`status ${shop.packet_picked ? 'completed' : ''}`}
              onClick={() => handlePacket(shop.order_shop_id)}
              disabled={shop.packet_picked}
            >Packet Picked</button>
            <button
              className={`status ${shop.payment_received ? 'completed' : ''}`}
              onClick={() => handlePayment(shop.order_shop_id)}
              disabled={shop.payment_received}
            >Payment Done</button>
          </div>
        </div>
      ))}
      {orders.every(order => order.packet_picked && order.payment_received) && (
        <button
          className="continue"
          style={{ width: '100%', fontWeight: '600' }}
          onClick={() => navigate('/thankyou')} // Add this line
        >
          Continue
        </button>
      )}
    </div>
  );
}

export default PostOrder;
