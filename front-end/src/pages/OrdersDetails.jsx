import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { requestAPI, updateAPI } from '../services/deliveryAPI';
import OrderDetailsTable from '../components/OrderDetailsTable';
import formatDate from '../utils/helpers';
import UserContext from '../contexts/UserContext';
import NavBar from '../components/NavBar';
import '../styles/OrderDetails.css';

function OrdersDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState(undefined);
  const [status, setStatus] = useState();
  const { user } = useContext(UserContext);

  const statusDispatch = 'EM TRÂNSITO';

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await requestAPI(`/orders/details/${id}`);
      setStatus(response.status);
      return setOrder(response);
    };
    fetchDetails();
  }, [status, id]);

  const handleDeliveryStatus = async (e) => {
    let updated = '';
    switch (e.target.name) {
    case 'preparing':
      updated = await updateAPI(
        `/orders/details/${id}`,
        { status: 'PREPARANDO' },
      );
      break;
    case 'dispatch':
      updated = await updateAPI(
        `/orders/details/${id}`,
        { status: statusDispatch },
      );
      break;
    case 'delivered':
      updated = await updateAPI(
        `/orders/details/${id}`,
        { status: 'ENTREGUE' },
      );
      break;
    default: updated = 'PENDENTE';
    }
    return setStatus(updated.status);
  };

  return (
    <div className="orders-details">
      <NavBar />
      <h2 className="page-title">Detalhe do pedido</h2>
      { order ? (
        <div className="order-details-card">
          <div className="order-details-label">
            <h3
              data-testid={
                `${user.role}_order_details__element-order-details-label-order-id`
              }
            >
              <p>{`PEDIDO 000${order.id}`}</p>
            </h3>
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
            <h3
              data-testid={
                `${user.role}_order_details__element-order-details-label-order-date`
              }
            >
              { formatDate(order.date) }
            </h3>
            <p
              data-testid={
                `${user.role}_order_details__element-order-details-label-delivery-status
              ${order.id}`
              }
              className={ `status-details ${status === 'PENDENTE' && 'pending'}
          ${status === 'PREPARANDO' && 'preparing'}
          ${status === statusDispatch && 'dispatch'}
          ${status === 'ENTREGUE' && 'delivered'}
          ` }
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
                disabled={ status !== statusDispatch }
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
                  className="preparing-order"
                >
                  Preparar pedido
                </button>
                <button
                  data-testid="seller_order_details__button-dispatch-check"
                  onClick={ handleDeliveryStatus }
                  type="button"
                  disabled={ status !== 'PREPARANDO' }
                  name="dispatch"
                  className="dispatch-order"
                >
                  Saiu para a entrega
                </button>
              </div>
            )
            }
          </div>
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
