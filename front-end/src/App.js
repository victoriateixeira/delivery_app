import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import DeliveryProvider from './contexts/DeliveryProvider';
import ProductProvider from './contexts/ProductProvider';
import AdminProvider from './contexts/AdminProvider';

function App() {
  return (
    <BrowserRouter>
      <DeliveryProvider>
        <ProductProvider>
          <AdminProvider>
            <Routes />
          </AdminProvider>
        </ProductProvider>
      </DeliveryProvider>
    </BrowserRouter>
  );
}

export default App;
