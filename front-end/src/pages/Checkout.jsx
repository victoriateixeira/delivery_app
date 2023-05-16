import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { requestAPI } from '../services/deliveryAPI';
import { read } from '../services/localStorage';
import NavBar from '../components/NavBar';

function Checkout() {
  const [items, setItems] = useState([]);
  const [seller, setSeller] = useState([]);
  const [total, setTotal] = useState(0);
  // const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchSeller = async () => {
      const response = await requestAPI('/customer/checkout/');

      return setSeller(response);
    };
    fetchSeller();
  }, []);

  useEffect(() => {
    const storedItems = read('cart') || [];
    setItems(storedItems);
  }, []);

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };
  function calculateTotal() {
    const sum = items.reduce((tot, item) => tot + Number(item.price) * item.qty, 0);
    setTotal(sum);
  }

  useEffect(() => {
    calculateTotal();
  }, [items]);

  return (
    <>
      <NavBar />
      <br />
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
                {el + 1}
              </th>
              <td
                data-testid={ `custumer_checkout_element-table-name-${el}` }
              >
                {item.name}
              </td>
              <td
                data-testid={ `custumer_checkout_element-table-quantity-${el}` }
              >
                {item.qty}
              </td>
              <td
                data-testid={ `custumer_checkout_element-table-unit-price-${el}` }
              >
                {item.price}
              </td>
              <td
                data-testid={ `custumer_checkout_element-table-sub-total-${el}` }
              >
                {(item.qty * Number(item.price)).toFixed(2)}
              </td>
              <td>
                <button
                  type="button"
                  data-testid={ `custumer_checkout_element-table-remove-${el}` }
                  onClick={ () => removeItem(item.id) }
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
          {' '}
          {total}

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
