import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import OrderCard from '../components/OrderCard';
import { requestAPI } from '../services/deliveryAPI';
import UserContext from '../contexts/UserContext';
import formatDate from '../utils/helpers';

function CustomersOrders() {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (user.id) {
        const getOrders = await requestAPI(`/customers/orders/${user.id}`);
        setOrders(getOrders);
      }
    };
    fetchOrders();
  }, [user]);

  return (
    <div className="customers-orders">
      { orders.length > 0
        ? orders.map((order) => (
          <OrderCard
            onClick={ () => history.push(`/customers/orders/${order.id}`) }
            key={ order.id }
            id={ order.id }
            date={ formatDate(order.saleDate) }
            status={ order.status }
            price={ order.totalPrice }
          />)) : 'Você não possui pedidos'}
    </div>
  );
}

export default CustomersOrders;
