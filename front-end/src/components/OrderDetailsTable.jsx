import React from 'react';
import PropTypes from 'prop-types';

function OrderDetailsTable({ products, user }) {
  return (
    <table className="details-table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </tr>
      </thead>
      <tbody>
        { products.map((product, index) => (
          <tr key={ index }>
            <td
              data-testid={
                `${user}_order_details__element-order-table-item-number-${index}`
              }
            >
              { index + 1 }
            </td>
            <td
              data-testid={
                `${user}_order_details__element-order-table-name-${index}`
              }
            >
              { product.name }
            </td>
            <td
              data-testid={
                `${user}_order_details__element-order-table-quantity-${index}`
              }
            >
              { product.quantity }
            </td>
            <td
              data-testid={
                `${user}_order_details__element-order-table-unit-price-${index}`
              }
            >
              { `${(`${product.price}`).replace('.', ',')}` }
            </td>
            <td
              data-testid={
                `${user}_order_details__element-order-table-sub-total-${index}`
              }
            >
              { `${(`${product.price * product.quantity}`).replace('.', ',')}` }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

OrderDetailsTable.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.string.isRequired,
    }),
  ).isRequired,
  user: PropTypes.string.isRequired,
};

export default OrderDetailsTable;
