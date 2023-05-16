import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithProviderAndRouter from './helper/renderWithProviderAndRouter';
import App from '../App';
import * as deliveryAPI from '../services/deliveryAPI';

const mockUser = {
  name: 'Jest Mock Stub',
  email: 'test@email.com',
  password: '@#nomocha#@',
  role: 'customer',
};

describe('Testa o fluxo de Registro', () => {
  let name;
  let email;
  let password;
  let myHistory;
  const BUTTON_REGISTER = 'common_register__button-register';

  beforeEach(() => {
    const { history } = renderWithProviderAndRouter(<App />);
    history.push('/register');
    name = screen.getByTestId('common_register__input-name');
    email = screen.getByTestId('common_register__input-email');
    password = screen.getByTestId('common_register__input-password');
    myHistory = history;
  });

  jest.spyOn(deliveryAPI, 'postAPI');

  it('Todos os elementos estão renderizados na tela', () => {
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  it('Testa se botão está desativado com dados incorretos', () => {
    userEvent.type(name, 'incorreto');
    userEvent.type(email, 'incorreto');
    userEvent.type(password, 'incorreto');
    const button = screen.getByTestId(BUTTON_REGISTER);

    expect(button).toBeDisabled();
  });

  it('Deve fazer registro e redirecionar página', async () => {
    deliveryAPI.postAPI.mockResolvedValue(mockUser);

    userEvent.type(name, mockUser.name);
    userEvent.type(email, mockUser.email);
    userEvent.type(password, mockUser.password);
    const button = screen.getByTestId(BUTTON_REGISTER);
    userEvent.click(button);

    await waitFor(() => {
      expect(myHistory.location.pathname).toBe('/customer/products');
    });
  });

  it('Deve mostrar erro ao registrar usuário já cadastrado', async () => {
    deliveryAPI.postAPI.mockRejectedValue(new Error(''));

    userEvent.type(name, mockUser.name);
    userEvent.type(email, mockUser.email);
    userEvent.type(password, mockUser.password);
    const button = screen.getByTestId(BUTTON_REGISTER);
    userEvent.click(button);
    const msgError = screen.getByTestId('common_register__element-invalid_register');

    await waitFor(() => {
      expect(myHistory.location.pathname).toBe('/register');
      expect(msgError).not.toBeDisabled();
    });
  });
});
