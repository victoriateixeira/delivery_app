import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import DeliveryProvider from '../../contexts/DeliveryProvider';

const renderWithProviderAndRouter = (component) => ({
  ...render(
    <BrowserRouter>
      <DeliveryProvider>
        { component }
      </DeliveryProvider>
    </BrowserRouter>,
  ),
});

export default renderWithProviderAndRouter;
