import React from 'react';
import Routes from './Routes';
import DeliveryProvider from './contexts/DeliveryProvider';
import ProductProvider from './contexts/ProductProvider';
import AdminProvider from './contexts/AdminProvider';

function App() {
  return (
    <DeliveryProvider>
      <ProductProvider>
        <AdminProvider>
          <Routes />
        </AdminProvider>
      </ProductProvider>
    </DeliveryProvider>
  );
}

export default App;
