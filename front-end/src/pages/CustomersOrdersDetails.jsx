import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { requestAPI } from '../services/deliveryAPI';

function CustomersOrdersDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await requestAPI(`/customers/orders/details${id}`);

      return setOrder(response);
    };
    fetchDetails();
  }, [id]);

  return (
    <h1>{ order }</h1>
  );
}

export default CustomersOrdersDetails;
