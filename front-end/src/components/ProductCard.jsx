import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductContext from '../context/ProductContext';

function ProductCard({ product }) {
  const { cart, addToCart, removeFromCart } = useContext(ProductContext);
  const { id, name, price, urlImage } = product;
  const [cartQty, setCartQty] = useState();
  useEffect(() => {
    if (cart !== undefined) {
      setCartQty(cart.filter((cartItem) => cartItem.id === id).qty);
    }
  }, [cartQty, cart, id]);

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
            alt={ name }
          />
        </button>
      </Link>
      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        type="button"
        onClick={ () => removeFromCart(product) }
        name="subtract"
      >
        -
      </button>
      <span
        data-testid={ `customer_products__input-card-quantity-${id}` }
      >
        {cartQty || 0}

      </span>
      <button
        data-testid={ `customer_products__button-card-add-item-${id}` }
        type="button"
        onClick={ () => addToCart(product) }
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
