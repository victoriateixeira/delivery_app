import React from 'react';
import PropTypes from 'prop-types';
import '../styles/OrderDetailsTableStyle.css';

function OrderDetailsTable({ products, user }) {
  return (
    <table className="details-table">
      <thead className="head-row">
        <tr>
          <th className="head-table">Item</th>
          <th className="head-table">Descrição</th>
          <th className="head-table">Quantidade</th>
          <th className="head-table">Valor Unitário</th>
          <th className="head-table">Sub-total</th>
        </tr>
      </thead>
      <tbody>
        { products.map((product, index) => (
          <tr key={ index } className="items-row">
            <td
              className="table-item"
              data-testid={
                `${user}_order_details__element-order-table-item-number-${index}`
              }
            >
              { index + 1 }
            </td>
            <td
              className="table-description"
              data-testid={
                `${user}_order_details__element-order-table-name-${index}`
              }
            >
              { product.name }
            </td>
            <td
              className="table-quantity"
              data-testid={
                `${user}_order_details__element-order-table-quantity-${index}`
              }
            >
              { product.quantity }
            </td>
            <td
              className="table-product-price"
              data-testid={
                `${user}_order_details__element-order-table-unit-price-${index}`
              }
            >
              { `${(`${product.price}`).replace('.', ',')}` }
            </td>
            <td
              className="table-subtotal"
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
