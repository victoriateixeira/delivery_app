import React, { useEffect, useState, useContext } from 'react';
import OrderCard from '../components/OrderCard';
import { requestAPI } from '../services/deliveryAPI';
// import { save, read } from '../services/localStorage';
import UserContext from '../contexts/UserContext';

function CustomersOrders() {
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
            key={ order.id }
            id={ order.id }
            date={ order.saleDate }
            status={ order.status }
            price={ order.totalPrice }
          />)) : 'Você não possui pedidos'}
    </div>
  );
}

export default CustomersOrders;
