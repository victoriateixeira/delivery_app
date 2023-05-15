import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { requestAPI } from '../services/deliveryAPI';

function Checkout() {
  const [items, setItems] = useState([]);
  const [seller, setSeller] = useState([]);
  // const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchSeller = async () => {
      const response = await requestAPI('/customer/checkout/');

      return setSeller(response);
    };
    fetchSeller();
  }, []);

  // useEffect(() => {
  //   // Recuperar itens do localStorage
  //   const savedCartItems = localStorage.getItem('cartItems');
  //   if (savedCartItems) {
  //     setCartItems(JSON.parse(savedCartItems));
  //   }
  // }, []);

  // useEffect(() => {
  //   // Atualizar o localStorage sempre que o carrinho de compras for modificado
  //   localStorage.setItem('cartItems', JSON.stringify(cartItems));
  // }, [cartItems]);

  const removeItem = (id) => {
    const item = products.filter((ele) => ele.id !== id);
    setItems(item);
  };

  return (
    <>
      <h3>Finalizar Pedido</h3>
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
      <br />
      <h3>Detalhes e Endereço para Entrega</h3>
      <div>
        <label htmlFor="select-seller">
          P. Vendedor Responsável:
          <select
            type="select"
            data-testid="customer_checkout_select-seller"
            onChange={ ({ target }) => setSeller(target.value) }
          >
            { console.log(seller)}
            {
              seller.map((sel) => (
                <option
                  key="sel.id"
                  value={ sel.id }
                >
                  {sel.name}
                </option>
              ))
            }

          </select>
        </label>

        <label htmlFor="input-address">
          Endereço
          <input
            name="input-address"
            type="text"
            data-testid="customer_checkout_input-adress"
          />
        </label>

        <label htmlFor="input-number">
          Número
          <input
            name="input-number"
            type="number"
            data-testid="customer_checkout_input-adress-number"
          />
        </label>
        <br />
        <br />

        <Link to="/customer/orders">
          <button
            type="button"
            data-testid="customer_checkout_button-submit-order"
          >
            Finalizar Pedido
          </button>
        </Link>

      </div>
    </>
  );
}

export default Checkout;
