import React from 'react';
import PropTypes from 'prop-types';

function TableCheckout({ items, removeItem }) {
  return (
    <table className="details-table">
      <thead>
        <tr>
          <th className="head-table">Item</th>
          <th className="head-table">Descrição</th>
          <th className="head-table">Quantidade</th>
          <th className="head-table">Valor Unitário</th>
          <th className="head-table">Subtotal</th>
          <th className="head-table">Remover Item</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, el) => (
          <tr key={ el }>
            <th
              className="table-item"
              data-testid={
                `customer_checkout__element-order-table-item-number-${el}`
              }
            >
              {el + 1}
            </th>
            <td
              className="table-description"
              data-testid={ `customer_checkout__element-order-table-name-${el}` }
            >
              {item.name}
            </td>
            <td
              className="table-quantity"
              data-testid={ `customer_checkout__element-order-table-quantity-${el}` }
            >
              {item.qty}
            </td>
            <td
              className="table-subtotal"
              data-testid={
                `customer_checkout__element-order-table-unit-price-${el}`
              }
            >
              {item.price.replace('.', ',')}
            </td>
            <td
              className="table-product-price"
              data-testid={ `customer_checkout__element-order-table-sub-total-${el}` }
            >
              {(item.qty * Number(item.price)).toFixed(2).replace('.', ',')}
            </td>
            <td className="remove-item">
              <button
                className="button-remove-item"
                type="button"
                data-testid={ `customer_checkout__element-order-table-remove-${el}` }
                onClick={ removeItem(item.id) }
              >
                Remover
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TableCheckout.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      qty: PropTypes.number.isRequired,
      price: PropTypes.string.isRequired,
    }),
  ).isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default TableCheckout;
