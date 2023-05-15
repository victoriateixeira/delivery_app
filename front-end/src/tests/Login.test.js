import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../utils/renderWithRouter';
import DeliveryProvider from '../contexts/DeliveryProvider';

describe('Testa a tela de login', () => {
  it('Os campos de email e senha, os botões de login e registro aparecem na tela', () => {
    renderWithRouter(<DeliveryProvider><App /></DeliveryProvider>);

    const email = screen.getByTestId('common_login__input-email');
    const password = screen.getByTestId('common_login__input-password');
    const loginButton = screen.getByTestId('common_login__button-login');
    const registerButton = screen.getByTestId('common_login__button-register');
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });

  it('Após os valores corretos serem passados aos inputs habilita o login', () => {
    renderWithRouter(<DeliveryProvider><App /></DeliveryProvider>);

    const email = screen.getByTestId('common_login__input-email');
    const password = screen.getByTestId('common_login__input-password');
    const loginButton = screen.getByTestId('common_login__button-login');
    expect(loginButton).toBeDisabled();
    userEvent.type(email, 'zebirita@email.com');
    userEvent.type(password, '$#zebirita#$');
    expect(email).toHaveValue('zebirita@email.com');
    expect(password).toHaveValue('$#zebirita#$');
    expect(loginButton).not.toBeDisabled();
  });
});
