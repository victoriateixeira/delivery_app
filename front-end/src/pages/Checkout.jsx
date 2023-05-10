import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Checkout() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItem] = useState([]);

  useEffect(() => {
    // Recuperar itens do localStorage
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  useEffect(() => {
    // Atualizar o localStorage sempre que o carrinho de compras for modificado
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const removeItem = (id) => {
    const item = products.filter((ele) => ele.id !== id);
    setItems(item);
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
                {item.quantidade * item.valorUnitario}
              </td>
              <td>
                <button
                  type="button"
                  data-testid={ `custumer_checkout_element-table-remove-${el}` }
                  onClick={ () => removeItem(id) }
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <p data-testid="customer_checkout__element-order-total-price">
          Valor Total:

        </p>
      </div>

    </div>
  );
}

export default Checkout;
