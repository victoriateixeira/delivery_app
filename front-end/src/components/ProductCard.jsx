import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  const { id, name, price, urlImage } = product;
  return (
    <div
      data-testid={ `customer_products__element-card-price-${id}` }
    >
      <Link to={ `customer/products/${id}` }>
        <div>
          R$
          {price}
        </div>
        <button
          type="button"
        >
          <div>
            {name}
          </div>
          <img
            src={ urlImage }
            alt={ name }
          />
        </button>
      </Link>
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
