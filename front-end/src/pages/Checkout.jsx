import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { requestAPI, postAPI, setToken } from '../services/deliveryAPI';
import { read, save, remove } from '../services/localStorage';
import NavBar from '../components/NavBar';
import DeliveryContext from '../contexts/DeliveryContext';
import ProductContext from '../contexts/ProductContext';
import '../styles/CheckoutStyle.css';
import TableCheckout from '../components/TableCheckout';

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
    console.log(cart);
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
    remove('cart');
  }

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  return (
    <div className="checkout-page">
      <NavBar />
      <div className="checkout-details">
        <h3 className="checkout-title">Finalizar Pedido</h3>
        <TableCheckout items={ cart } removeItem={ removeItem } />
        <div>
          <p
            className="checkout-total"
            data-testid="customer_checkout__element-order-total-price"
          >
            Total:
            {' '}
            {`${total}`.replace('.', ',')}
          </p>
        </div>
        <br />
        <h3 className="checkout-title">Detalhes e Endereço para Entrega</h3>
        <label htmlFor="select-seller">
          P. Vendedor Responsável:
          <select
            data-testid="customer_checkout__select-seller"
          >
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
        <label htmlFor="input-address" className="checkout-title">
          Endereço
          <input
            className="input-address"
            value={ address }
            onChange={ (e) => setAddress(e.target.value) }
            name="input-address"
            type="text"
            data-testid="customer_checkout__input-address"
          />
        </label>
        <label htmlFor="input-number" className="checkout-title">
          Número
          <input
            className="input-checkout"
            value={ addressNumber }
            onChange={ (e) => setAddressNumber(e.target.value) }
            name="input-number"
            type="number"
            data-testid="customer_checkout__input-address-number"
          />
        </label>
        <br />
        <br />
        <div className="finish-button-container">
          <button
            className="finish-button"
            onClick={ handleClick }
            type="button"
            data-testid="customer_checkout__button-submit-order"
          >
            Finalizar Pedido
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
