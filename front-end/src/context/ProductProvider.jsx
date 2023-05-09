import React, { useMemo, useState } from 'react';
import ProductContext from './ProductContext';

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
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
