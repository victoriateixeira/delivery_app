import React, { useEffect, useMemo, useState } from 'react';
import { node } from 'prop-types';
import ProductContext from './ProductContext';
import { requestAPI } from '../utils/deliveryAPI';

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const getProducts = async () => {
    const response = await requestAPI('/customer/products');
    setProducts(response);
  };

  const addToCart = async (product) => {
    if (cart !== undefined) {
      const isProduct = cart.some((cartItem) => cartItem.id === product.id);
      if (!isProduct) {
        setCart([...cart, { ...product, qty: 1 }]);
      }
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === product.id) {
          cartItem.qty += 1;
        }
        return cartItem;
      });
      setCart(...newCart);
    }
  };
  const removeFromCart = async (product) => {
    if (cart !== undefined) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === product.id && cartItem.qty > 0) {
          cartItem.qty -= 1;
        }
        return cartItem;
      });
      setCart(...newCart);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const value = useMemo(() => ({
    products,
    setProducts,
    cart,
    setCart,
    addToCart,
    removeFromCart,
  }), [products, cart]);

  return (
    <ProductContext.Provider value={ value }>
      { children }
    </ProductContext.Provider>
  );
}

ProductProvider.propTypes = {
  children: node.isRequired,
};
