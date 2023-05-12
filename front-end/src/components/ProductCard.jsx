import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductContext from '../contexts/ProductContext';
import { read, save } from '../services/localStorage';

function ProductCard({ product }) {
  const TWENTY_ONE = 21;
  console.log(product);
  const { setCart, addToCart, removeFromCart } = useContext(ProductContext);
  const { id, name, price, urlImage } = product;
  const [cartQty, setCartQty] = useState();

  // useEffect(() => {
  //   const storeCart = read('cart');
  //   setCart(storeCart);
  // }, []);
  // useEffect(() => {
  //   const storeCart = read('cart');
  //   setCart(storeCart);
  //   if (Array.isArray(cart) && cart.length > 0) {
  //     const [iQty] = cart.filter((cartItem) => +cartItem.id === +id);
  //     if (iQty) {
  //       setCartQty(iQty.qty);
  //     } else {
  //       setCartQty(0);
  //     }
  //   } else {
  //     setCartQty(0);
  //   }
  // }, []);

  const updateCart = (value) => {
    const storeCart = read('cart') || [];
    const updatedCart = storeCart.map((card) => {
      if (+card.id === +id) {
        card.qty = +value;
      }
      return card;
    });
    setCart(updatedCart);
    save('cart', updatedCart);
  };

  const addQty = () => {
    const newQty = cartQty + 1;
    setCartQty(newQty);
    addToCart(product);
  };
  const removeQty = () => {
    if (cartQty > 0) {
      const newQty = cartQty - 1;
      setCartQty(newQty);
    }
    removeFromCart(product);
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setCartQty(Number(value));
    updateCart(value);
  };

  return (
    <div
      data-testid={ `customer_products__element-card-price-${id}` }
    >
      <Link to={ `customer/products/${id}` }>
        <div
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          R$
          {price}
        </div>
        <button
          type="button"
        >
          <div
            data-testid={ `customer_products__element-card-title-${id}` }
          >
            {name}
          </div>
          <img
            data-testid={ `customer_products__img-card-bg-image-${id}` }
            src={ urlImage }
            alt={ urlImage.slice(TWENTY_ONE) }
            width={ 75 }
          />
        </button>
      </Link>
      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        type="button"
        onClick={ () => removeQty() }
        name="subtract"
      >
        -
      </button>

      <input
        type="text"
        data-testid={ `customer_products__input-card-quantity-${id}` }
        onChange={ (e) => handleChange(e) }
        value={ cartQty || 0 }
      />
      <button
        data-testid={ `customer_products__button-card-add-item-${id}` }
        type="button"
        onClick={ () => addQty() }
        name="add"
      >
        +
      </button>
    </div>

  );
}
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
  }).isRequired,

};
export default ProductCard;
