import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import { requestAPI } from '../services/deliveryAPI';

function SellerOrders() {
  const { user } = useContext(UserContext);
  const [orders, setOrders] = useState(undefined);

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
          <p key={ order.id }>{ order.name }</p>
        )) : 'Você ainda não tem pedidos'}
    </div>
  );
}

export default SellerOrders;
