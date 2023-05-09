import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Checkout() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/checkout')
      .then((response) => setItems(response.data))
      .catch((error) => console.error(error));
  }, []);

  const removerItem = (index) => {
    const novosItens = [...items];
    novosItens.splice(index, 1);
    setItems(novosItens);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Subtotal</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, el) => (
            <tr key={ el }>
              <th
                data-testid={ `custumer_checkout_element-order-number-${el}` }
              >
                {item.item}
              </th>
              <td
                data-testid={ `custumer_checkout_element-table-name-${el}` }
              >
                {item.descricao}
              </td>
              <td
                data-testid={ `custumer_checkout_element-table-quantity-${el}` }
              >
                {item.quantidade}
              </td>
              <td
                data-testid={ `custumer_checkout_element-table-unit-price-${el}` }
              >
                {item.valorUnitario}
              </td>
              <td
                data-testid={ `custumer_checkout_element-table-sub-total-${el}` }
              >
                {item.subtotal}
              </td>
              <td>
                <button
                  type="button"
                  data-testid={ `custumer_checkout_element-table-remove-${el}` }
                  onClick={ () => removerItem(el) }
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Checkout;
