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
    if (cart !== undefined || cart === []) {
      const copyCart = [...cart];
      const isProduct = copyCart.some((cartItem) => +cartItem.id === +product.id);
      console.log(isProduct);
      if (!isProduct) {
        copyCart.push({ ...product, qty: 1 });
        setCart(copyCart);
      //  setCart([...cart, { ...product, qty: 1 }]);
      }
      const newCart = copyCart.map((cartItem) => {
        if (cartItem.id === product.id) {
          cartItem.qty += 1;
        }
        return cartItem;
      });
      setCart([...newCart]);
      console.log(newCart);
    }

    // const copyCart = [...cart];
    // const cartItem = copyCart.find((item) => item.id === product.id);
    // if (!cartItem) {
    //   copyCart.push({ ...product, qty: 1 });
    // } else {
    //   cartItem.qty += 1;
    // }
    // setCart(copyCart);
  };
  const removeFromCart = async (product) => {
    if (cart !== undefined) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === product.id && cartItem.qty > 0) {
          cartItem.qty -= 1;
        }
        return cartItem;
      });
      setCart([...newCart]);
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
