import React from 'react';

function OrderCard({ id, date, status, price }) {
  console.log(id, date, status, price);
  return (
    <div className="order-card">
      <p data-testid={ `customer_orders__element-order-id-${id}` }>{ id }</p>
      <p data-testid={ `customer_orders__element-order-status-${id}` }> { status } </p>
      <p data-testid={ `customer_orders__element-order-date-${id}` }>{ date }</p>
      <p data-testid={ `customer_orders__element-order-price-${id}` }>{ price }</p>
    </div>
  );
}

export default OrderCard;