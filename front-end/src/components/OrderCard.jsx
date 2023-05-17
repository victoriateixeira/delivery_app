import React from 'react';
import PropTypes from 'prop-types';

function OrderCard({ id, date, status, price, onClick }) {
  return (
    <button className="order-card" type="button" onClick={ onClick }>
      <p data-testid={ `customer_orders__element-order-id-${id}` }>
        { id }
      </p>
      <p data-testid={ `customer_orders__element-order-status-${id}` }>
        { status }
      </p>
      <p data-testid={ `customer_orders__element-order-date-${id}` }>
        { date }
      </p>
      <p data-testid={ `customer_orders__element-order-price-${id}` }>
        { price }
      </p>
    </button>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default OrderCard;
