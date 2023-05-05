import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderCard from '../components/OrderCard';
import { requestOrders } from '../services/deliveryAPI';

function CustomersOrders() {
  const { id } = useParams();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const getOrders = await requestOrders('/customers/orders', id);
      setOrders(getOrders);
    }
    fetchOrders();
    // setOrders([{
    //   id: 1,
    //   date: new Date().toLocaleDateString(),
    //   status: 'pendente',
    //   price: 1.56
    // }])
  }, []);

  return (
    <div className="customers-orders">
      { orders.length > 0 ?
        orders.map((order) => <OrderCard
            id={order.id}
            date={order.date}
            status={order.status}
            price={order.price}
          />) : 'Você não possui pedidos'
      }
    </div>
  );
}

export default CustomersOrders;