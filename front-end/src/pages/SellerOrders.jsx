import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import { requestAPI } from '../services/deliveryAPI';
import SellerOrderCard from '../components/SellerOrderCard';
import formatDate from '../utils/helpers';

function SellerOrders() {
  const { user } = useContext(UserContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchSellerOrders = async () => {
      if (user.id) {
        const getOrders = await requestAPI(`/seller/orders/${user.id}`);
        setOrders(getOrders);
      }
    };
    fetchSellerOrders();
  }, [user]);

  return (
    <div className="seller-page">
      <h1>Página do vendedor</h1>
      { orders.length > 0
        ? orders.map((order) => (
          <SellerOrderCard
            key={ order.id }
            id={ order.id }
            date={ formatDate(order.saleDate) }
            status={ order.status }
            price={ order.totalPrice }
            address={ order.deliveryAddress }
            addressNumber={ order.deliveryNumber }
          />
        )) : 'Você ainda não tem pedidos'}
    </div>
  );
}

export default SellerOrders;
