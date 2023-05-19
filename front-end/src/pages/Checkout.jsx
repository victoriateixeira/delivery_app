import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { requestAPI, postAPI, setToken } from '../services/deliveryAPI';
import { read, save } from '../services/localStorage';
import NavBar from '../components/NavBar';
import DeliveryContext from '../contexts/DeliveryContext';
import ProductContext from '../contexts/ProductContext';

function Checkout() {
  const { user } = useContext(DeliveryContext);

  const { cart, setCart } = useContext(ProductContext);
  const history = useHistory();
  // const [items, setItems] = useState([]);
  const [seller, setSeller] = useState([]);

  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState();
  // const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchSeller = async () => {
      const response = await requestAPI('/customer/checkout/');
      setSeller(response);
      console.log(response);
    };
    fetchSeller();
  }, []);

  useEffect(() => {
    const storedItems = read('cart') || [];
    setCart(storedItems);
  }, []);

  const removeItem = (id) => {
    const updatedItems = cart.filter((item) => item.id !== id);
    save('cart', updatedItems);
    setCart(updatedItems);
  };

  function calculateTotal() {
    const sum = cart.reduce((tot, item) => tot + Number(item.price) * item.qty, 0);
    setTotal(sum.toFixed(2));
  }

  async function handleClick() {
    setToken(user.token);
    const newSale = await postAPI('/customer/checkout', {
      userId: user.id,
      sellerId: seller[0].id,
      totalPrice: Number(total),
      deliveryAddress: address,
      deliveryNumber: addressNumber,
      saleDate: Date.now(),
      products: cart,
    });
    history.push(`/customer/orders/${newSale.id}`);
  }

  useEffect(() => {
    calculateTotal();
  }, [cart]);

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
          {cart.map((item, el) => (
            <tr key={ el }>
              <th
                data-testid={ `customer_checkout__element-order-table-item-number-${el}` }
              >
                {el + 1}
              </th>
              <td
                data-testid={ `customer_checkout__element-order-table-name-${el}` }
              >
                {item.name}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${el}` }
              >
                {item.qty}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-unit-price-${el}` }
              >
                {item.price.replace('.', ',')}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-sub-total-${el}` }
              >
                {(item.qty * Number(item.price)).toFixed(2).replace('.', ',')}
              </td>
              <td>
                <button
                  type="button"
                  data-testid={ `customer_checkout__element-order-table-remove-${el}` }
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
          {(`${total}`).replace('.', ',')}

        </p>
      </div>
      <br />
      <h3>Detalhes e Endereço para Entrega</h3>
      <div>
        <label htmlFor="select-seller">
          P. Vendedor Responsável:
          <select
            data-testid="customer_checkout__select-seller"
          >
            <option value="0">Vazio</option>
            { seller.length > 0
              && seller.map((sel) => (
                <option
                  key="sel.id"
                  value={ sel.id }
                >
                  {sel.name}
                </option>
              ))}
          </select>
        </label>

        <label htmlFor="input-address">
          Endereço
          <input
            value={ address }
            onChange={ (e) => setAddress(e.target.value) }
            name="input-address"
            type="text"
            data-testid="customer_checkout__input-address"
          />
        </label>

        <label htmlFor="input-number">
          Número
          <input
            value={ addressNumber }
            onChange={ (e) => setAddressNumber(e.target.value) }
            name="input-number"
            type="number"
            data-testid="customer_checkout__input-address-number"
          />
        </label>
        <br />
        <br />
        <button
          onClick={ handleClick }
          type="button"
          data-testid="customer_checkout__button-submit-order"
        >
          Finalizar Pedido
        </button>
      </div>
    </>
  );
}

export default Checkout;
