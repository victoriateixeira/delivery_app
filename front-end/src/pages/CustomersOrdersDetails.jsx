import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { requestAPI } from '../services/deliveryAPI';

function CustomersOrdersDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await requestAPI(`/customers/orders/details/${id}`);

      return setOrder(response);
    };
    fetchDetails();
  }, [id]);

  return (
    <div className="orders-details-card">
      <h1
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        { order.id }
      </h1>
      <h2 data-testid="customer_order_details__element-order-details-label-seller-name">
        { order.seller.name }
      </h2>
      <p data-testid="customer_order_details__element-order-details-label-order-date">
        { order.date }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-delivery-status"
        // o correto seria:  data-testid="customer_order_details__element-order-details-label-delivery-status<index> não entendi de onde tirarei esse <index>"
      >
        { status }
      </p>
      {/* esse status será retirado do objeto order, por enquanto está assim pois a lógica para modificar o status ainda não está sendo implementada */}
      <button
        data-testid="customer_order_details__button-delivery-check"
        onClick={ setStatus('entregue') }
        type="button"
      >
        Marcar como entregue
      </button>
    </div>
  );
}

export default CustomersOrdersDetails;
