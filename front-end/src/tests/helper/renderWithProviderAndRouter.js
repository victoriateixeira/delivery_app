import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import DeliveryProvider from '../../contexts/DeliveryProvider';

const renderWithProviderAndRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(
      <Router history={ history }>
        <DeliveryProvider>
          { component }
        </DeliveryProvider>
      </Router>,
    ),
    history,
  };
};

export default renderWithProviderAndRouter;
