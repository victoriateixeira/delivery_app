import React, { useEffect, useState, useContext } from 'react';
import OrderCard from '../components/OrderCard';
import { requestAPI } from '../services/deliveryAPI';
// import { save, read } from '../services/localStorage';
import DeliveryContext from '../contexts/DeliveryContext';

function CustomersOrders() {
  const { user } = useContext(DeliveryContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (user.id) {
        const getOrders = await requestAPI(`/customer/orders/${user.id}`);
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
            // onClick={ () => history.push(`/customer/orders/${order.id}`) }
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
