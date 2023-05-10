import React, { useContext } from 'react';
import NavBar from '../components/NavBar';
import ProductContext from '../context/ProductContext';
import ProductCard from '../components/ProductCard';

function Products() {
  const { products } = useContext(ProductContext);
  return (
    <>
      <NavBar />
      <div>
        {products.map((product, index) => index < 12 && (
          <div key={ index }>
            <ProductCard product={ product } />
          </div>
        )) }
      </div>

    </>
  );
}

export default Products;
