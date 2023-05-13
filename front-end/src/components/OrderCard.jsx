import React from 'react';
import PropTypes from 'prop-types';

function OrderCard({ id, date, status, price, onClick, role, address, addressNumber }) {
  return (
    <button className="order-card" type="button" onClick={ onClick }>
      <p data-testid={ `${role}_orders__element-order-id-${id}` }>
        { `000${id}` }
      </p>
      <p data-testid={ `${role}_orders__element-order-status-${id}` }>
        { status }
      </p>
      <p data-testid={ `${role}_orders__element-order-date-${id}` }>
        { date }
      </p>
      <p data-testid={ `${role}_orders__element-order-price-${id}` }>
        { price }
      </p>
      {
        role === 'seller'
        && (
          <p data-testid={ `seller_orders__element-card-address-${id}` }>
            {`${address}, ${addressNumber}`}
          </p>
        )
      }
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
