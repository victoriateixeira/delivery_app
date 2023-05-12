import React, { useEffect, useMemo, useState } from 'react';
import { node } from 'prop-types';
import ProductContext from './ProductContext';
import { requestAPI } from '../services/deliveryAPI';
import { save } from '../services/localStorage';
import usePersistState from '../hooks/usePersistState';

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState([]);
  const [cart, setCart] = usePersistState('cart', []);

  const getProducts = async () => {
    const response = await requestAPI('/customer/products');
    setProducts(response);
  };

  const addToCart = async (product) => {
    if (cart !== undefined || cart === []) {
      const copyCart = [...cart];
      const isProduct = copyCart.some((cartItem) => +cartItem.id === +product.id);
      if (!isProduct) {
        copyCart.push({ ...product, qty: 1 });
        setCart(copyCart);
        save('cart', copyCart);
      } else {
        const newCart = copyCart.map((cartItem) => {
          if (cartItem.id === product.id) {
            cartItem.qty += 1;
          }
          return cartItem;
        });
        setCart([...newCart]);
        save('cart', newCart);
        console.log(newCart);
      }
    }
  };
  const removeFromCart = async (product) => {
    if (cart !== undefined) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === product.id) {
          cartItem.qty -= 1;
        }
        return cartItem;
      });
      const updatedCart = newCart.filter((cartItem) => cartItem.qty > 0);
      setCart([...updatedCart]);
      save('cart', updatedCart);
      console.log(updatedCart);
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
