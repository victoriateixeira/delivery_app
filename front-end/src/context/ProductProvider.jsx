import React, { useEffect, useMemo, useState } from 'react';
import ProductContext from './ProductContext';
import { requestAPI } from '../utils/deliveryAPI';

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await requestAPI('/products');
    setProducts(response);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const value = useMemo(() => ({
    products,
    setProducts,
  }), [products]);

  return (
    <ProductContext.Provider value={ value }>
      { children }
    </ProductContext.Provider>
  );
}

ProductProvider.propTypes = {
  children: PropTypes.isRequired,
};
