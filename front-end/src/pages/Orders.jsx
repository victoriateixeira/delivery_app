import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import OrderCard from '../components/OrderCard';
import { requestAPI } from '../services/deliveryAPI';
import UserContext from '../contexts/UserContext';
import formatDate from '../utils/helpers';

function Orders() {
  const history = useHistory();
  const [orders, setOrders] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchOrders = async () => {
      if (user.id) {
        const getOrders = await requestAPI(`/orders/${user.role}/${user.id}`);
        setOrders(getOrders);
      }
    };
    fetchOrders();
  });

  return (
    <div className="orders-page">
      { orders.length > 0
        ? orders.map((order) => (
          <OrderCard
            key={ order.id }
            id={ order.id }
            date={ formatDate(order.saleDate) }
            status={ order.status }
            price={ order.totalPrice }
            onClick={ () => history.push(`/${user.role}/orders/${order.id}`) }
            role={ user.role }
            address={ order.deliveryAddress }
            addressNumber={ order.deliveryNumber }
          />)) : ''}
    </div>
  );
}

export default Orders;
