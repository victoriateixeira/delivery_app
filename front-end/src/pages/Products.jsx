import React, { useContext } from 'react';
import NavBar from '../components/NavBar';
import ProductContext from '../context/ProductContext';
import ProductCard from '../components/ProductCard';

function Products() {
  // useEffect() => {
  //   //fetchProducts
  // const products = await requestApi(endpoint);
  // return products;
  // }

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
        {/* {products.map((product, index) => index < 12 && (
          <div key={ index }>
            <p>{product.name}</p>
          </div>
        )) } */}

      </div>

    </>
  );
}

export default Products;
