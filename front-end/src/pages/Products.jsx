import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import NavBar from '../components/NavBar';
import ProductContext from '../contexts/ProductContext';
import ProductCard from '../components/ProductCard';
import { read } from '../services/localStorage';

function Products() {
  const { products, setCart } = useContext(ProductContext);
  const [totalCost, setTotalCost] = useState(0);
  const history = useHistory();
  const TWELVE = 12;
  useEffect(() => {
    const storeCart = read('cart');
    setCart(storeCart);
    const total = storeCart.reduce((acc, curr) => {
      acc += curr.qty * curr.price;
      return acc;
    }, 0);
    setTotalCost(total.toFixed(2));
  }, []);

  return (
    <>
      <NavBar />
      <div>
        {products.map((product, index) => index < TWELVE && (
          <div key={ index }>
            <ProductCard product={ product } />
          </div>
        )) }
      </div>
      <div>
        <button
          type="button"
          data-testid="customer_products__button-cart"
          onClick={ () => history.push('/customer/checkout') }
        >
          <span> Ver Carrinho</span>

          <span
            data-testid="customer_products__checkout-bottom-value"
          >
            {`$${totalCost}`}

          </span>
        </button>
      </div>

    </>
  );
}

export default Products;
