import React from 'react';
import PropTypes from 'prop-types';

function OrderCard({ id, date, status, price }) {
  return (
    <div data-testid={ `customer_products__element-order-date-${id}` }>
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
    </div>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default OrderCard;
