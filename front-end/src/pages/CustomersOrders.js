import React, { useEffect, useState } from 'react';
import OrderCard from '../components/OrderCard';

function CustomersOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders([{
      id: 1,
      date: new Date().toLocaleDateString(),
      status: 'pendente',
      price: 1.56
    }])
  }, []);

  return (
    <div className="customers-orders">
      {
        orders.map((order) => <OrderCard
            id={order.id}
            date={order.date}
            status={order.status}
            price={order.price}
          />)
      }
    </div>
  );
}

export default CustomersOrders;