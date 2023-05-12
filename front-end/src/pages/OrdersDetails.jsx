import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { requestAPI, updateAPI } from '../services/deliveryAPI';
import OrderDetailsTable from '../components/OrderDetailsTable';
import formatDate from '../utils/helpers';
import UserContext from '../contexts/UserContext';

function OrdersDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState(undefined);
  const [status, setStatus] = useState();
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await requestAPI(`/customer/orders/details/${id}`);
      setStatus(response.status);
      return setOrder(response);
    };
    fetchDetails();
  }, [status]);

  const handleDeliveryStatus = async (e) => {
    let updated = '';
    switch (e.target.name) {
    case 'preparing':
      updated = await updateAPI(
        `/customer/orders/details/${id}`,
        { status: 'PREPARANDO' },
      );
      break;
    case 'dispatch':
      updated = await updateAPI(
        `/customer/orders/details/${id}`,
        { status: 'EM TRÂNSITO' },
      );
      break;
    case 'delivered':
      updated = await updateAPI(
        `/customer/orders/details/${id}`,
        { status: 'ENTREGUE' },
      );
      break;
    default: updated = 'PENDENTE';
    }
    return setStatus(updated.status);
  };

  return (
    <div className="orders-details">
      { order ? (
        <div className="order-details-card">
          <h1>Detalhe do pedido</h1>
          <p
            data-testid={
              `${user.role}_order_details__element-order-details-label-order-id`
            }
          >
            <p>{`PEDIDO 000${order.id}`}</p>
          </p>
          {
            user.role === 'customer'
            && (
              <p
                data-testid={
                  `${user.role}_order_details__element-order-details-label-seller-name`
                }
              >
                { order.seller }
              </p>
            )
          }
          <p
            data-testid={
              `${user.role}_order_details__element-order-details-label-order-date`
            }
          >
            { formatDate(order.date) }
          </p>
          <p
            data-testid={
              `${user.role}_order_details__element-order-details-label-delivery-status
              ${order.id}`
            }
          >
            { status }
          </p>
          {
            user.role === 'customer'
            && (
              <button
                data-testid="customer_order_details__button-delivery-check"
                onClick={ handleDeliveryStatus }
                type="button"
                name="delivered"
                disabled={ status !== 'PREPARANDO' }
              >
                Marcar como entregue
              </button>
            )
          }
          {
            user.role === 'seller'
            && (
              <div className="seller-buttons">
                <button
                  data-testid="seller_order_details__button-preparing-check"
                  onClick={ handleDeliveryStatus }
                  type="button"
                  disabled={ status !== 'PENDENTE' }
                  name="preparing"
                >
                  Preparar pedido
                </button>
                <button
                  data-testid="seller_order_details__button-dispatch-check"
                  onClick={ handleDeliveryStatus }
                  type="button"
                  disabled={ status !== 'PREPARANDO' }
                  name="dispatch"
                >
                  Saiu para a entrega
                </button>
              </div>
            )
          }
          <OrderDetailsTable
            products={ order.products }
            user={ `${user.role}` }
          />
        </div>
      ) : 'Pedido não encontrado'}
    </div>
  );
}

export default OrdersDetails;
