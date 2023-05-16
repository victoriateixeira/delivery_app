import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import DeliveryProvider from './contexts/DeliveryProvider';
import ProductProvider from './contexts/ProductProvider';
import UserProvider from './contexts/UserProvider';
import './styles/index.css';
import AdminProvider from './contexts/AdminProvider';

ReactDOM.render(
  <BrowserRouter>
    <DeliveryProvider>
      <UserProvider>
        <ProductProvider>
          <AdminProvider>
            <App />
          </AdminProvider>
        </ProductProvider>
      </UserProvider>
    </DeliveryProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
