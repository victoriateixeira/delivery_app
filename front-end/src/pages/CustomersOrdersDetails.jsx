import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { requestAPI, updateAPI } from '../services/deliveryAPI';
import OrderDetailsTable from '../components/OrderDetailsTable';

function CustomersOrdersDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState(undefined);
  const [status, setStatus] = useState();

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await requestAPI(`/customers/orders/details/${id}`);
      setStatus(response.status);
      return setOrder(response);
    };
    fetchDetails();
  }, [status]);

  const handleDeliveryStatus = async () => {
    const updated = await updateAPI(
      `/customers/orders/details/${id}`,
      { status: 'ENTREGUE' },
    );

    return setStatus(updated.status);
  };

  return (
    <div className="orders-details">
      { order ? (
        <div className="order-details-card">
          <h1
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            { order.id }
          </h1>
          <h2
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            { order.seller }
          </h2>
          <p data-testid="customer_order_details__element-order-details-label-order-date">
            { order.date }
          </p>
          <p
            data-testid={
              `customer_order_details__element-order-details-label-delivery-status
              ${order.id}`
            }
            // o correto seria:  data-testid="customer_order_details__element-order-details-label-delivery-status<index> não entendi de onde tirarei esse <index>"
          >
            { status }
          </p>
          {/* esse status será retirado do objeto order, por enquanto está assim pois a lógica para modificar o status ainda não está sendo implementada */}
          <button
            data-testid="customer_order_details__button-delivery-check"
            onClick={ handleDeliveryStatus }
            type="button"
          >
            Marcar como entregue
          </button>
          <OrderDetailsTable products={ order.products } />
        </div>
      ) : 'Pedido não encontrado'}
    </div>
  );
}

export default CustomersOrdersDetails;
