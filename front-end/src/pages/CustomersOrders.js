import React, { useEffect, useState } from 'react';
import OrderCard from '../components/OrderCard';
import { requestOrders } from '../services/deliveryAPI';
import { saveUser, readUser } from '../services/localStorage';
import { readToken } from '../services/token';

function CustomersOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    saveUser({
      name: "Nome Da Pessoa Usuária",
      email: "email@dominio.com",
      role: "customer",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTm9tZSBEYSBQZXNzb2EgVXN1w6FyaWEiLCJlbWFpbCI6ImVtYWlsQGRvbWluaW8uY29tIiwicm9sZSI6ImN1c3RvbWVyIn0.s5cmiyY16yViCXkHuzWekxkMeYBi75eT8uJnSbfadNE"
    });
    const { token } = readUser();
    const id = readToken(token);
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