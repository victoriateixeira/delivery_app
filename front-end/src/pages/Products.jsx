import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import requestApi from '../utils/requestAPI';

function Products() {
  // useEffect() => {
  //   //fetchProducts
  // const products = await requestApi(endpoint);
  // return products;
  // }
  return (
    <>
    <NavBar/>
{/* <div>
  products.map((product, index) => index < 12 && (
    <div key= {index}>
    <ProductCard product = {product}/>
    </div>
  ))
</div> */}
    </>

  )
}

export default Products;