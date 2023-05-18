import React from 'react';
import PropTypes from 'prop-types';

function SellerOrderCard({
  id,
  date,
  status,
  price,
  address,
  addressNumber,
  onClick,
}) {
  return (
    <button className="seller-order-card" type="button" onClick={ onClick }>
      <p data-testid={ `seller_orders__element-order-id-${id}` }>
        { id }
      </p>
      <p data-testid={ `seller_orders__element-delivery-status-${id}` }>
        { status }
      </p>
      <p data-testid={ `seller_orders__element-order-date-${id}` }>
        { date }
      </p>
      <p data-testid={ `seller_orders__element-card-price-${id}` }>
        { price }
      </p>
      <p data-testid={ `seller_orders__element-card-address-${id}` }>
        { `${address}, ${addressNumber}` }
      </p>
    </button>
  );
}

SellerOrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  addressNumber: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SellerOrderCard;
