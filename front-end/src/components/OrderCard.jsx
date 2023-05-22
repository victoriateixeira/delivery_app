import React from 'react';
import PropTypes from 'prop-types';
import '../styles/OrderCardStyle.css';

function OrderCard({ id, date, status, price, onClick, role, address, addressNumber }) {
  return (
    <button className="order-card" type="button" onClick={ onClick }>
      <div className="order">
        <p>Pedido</p>
        <h1 data-testid={ `${role}_orders__element-order-id-${id}` }>
          { `000${id}` }
        </h1>
      </div>
      <div className="container-card">
        <div className="date-price-status">
          <h1
            data-testid={ `${role}_orders__element-delivery-status-${id}` }
            className={ `status ${status === 'Pendente' && 'pending'}
          ${status === 'Preparando' && 'preparing'}
          ${status === 'Em Trânsito' && 'dispatch'}
          ${status === 'Entregue' && 'delivered'}
          ` }
          >
            { status }
          </h1>
          <div className="card-right">
            <h3
              data-testid={ `${role}_orders__element-order-date-${id}` }
              className="date-price date"
            >
              { date }
            </h3>
            <h3
              data-testid={ `${role}_orders__element-card-price-${id}` }
              className="date-price"
            >
              { `R$ ${(`${price}`).replace('.', ',')}` }
            </h3>
          </div>
        </div>
        {role === 'seller'
          && (
            <div className="address">
              <p data-testid={ `seller_orders__element-card-address-${id}` }>
                {`${address}, ${addressNumber}`}
              </p>
            </div>
          )}
      </div>
    </button>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  addressNumber: PropTypes.string.isRequired,
};

export default OrderCard;
