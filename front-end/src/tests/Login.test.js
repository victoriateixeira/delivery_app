import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../utils/renderWithRouter';
import DeliveryProvider from '../contexts/DeliveryProvider';

const VALID_EMAIL = 'zebirita@email.com';
const VALID_PASSWORD = '$#zebirita#$';
const INPUT_EMAIL = 'common_login__input-email';
const INPUT_PASSWORD = 'common_login__input-password';
const LOGIN_BUTTON = 'common_login__button-login';

describe('Testa a tela de login', () => {
  it('A rota inicial é "/login"', () => {
    const { history: { location: { pathname } } } = renderWithRouter(
      <DeliveryProvider><App /></DeliveryProvider>,
    );
    expect(pathname).toBe('/login');
  });

  it('Os campos de email e senha, os botões de login e registro aparecem na tela', () => {
    renderWithRouter(<DeliveryProvider><App /></DeliveryProvider>);

    const email = screen.getByTestId(INPUT_EMAIL);
    const password = screen.getByTestId(INPUT_PASSWORD);
    const loginButton = screen.getByTestId(LOGIN_BUTTON);
    const registerButton = screen.getByTestId('common_login__button-register');
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });

  it('Após os valores corretos serem passados aos inputs habilita o login', () => {
    renderWithRouter(<DeliveryProvider><App /></DeliveryProvider>);

    const email = screen.getByTestId(INPUT_EMAIL);
    const password = screen.getByTestId(INPUT_PASSWORD);
    const loginButton = screen.getByTestId(LOGIN_BUTTON);
    expect(loginButton).toBeDisabled();
    userEvent.type(email, VALID_EMAIL);
    userEvent.type(password, VALID_PASSWORD);
    expect(email).toHaveValue(VALID_EMAIL);
    expect(password).toHaveValue(VALID_PASSWORD);
    expect(loginButton).not.toBeDisabled();
  });

  // it('Após o login, redireciona para a rota /customer/products', async () => {
  //   const { history: { location: { pathname } } } = renderWithRouter(
  //     <DeliveryProvider><App /></DeliveryProvider>,
  //   );
  //   const email = screen.getByTestId(INPUT_EMAIL);
  //   const password = screen.getByTestId(INPUT_PASSWORD);
  //   const loginButton = screen.getByTestId(LOGIN_BUTTON);
  //   userEvent.type(email, VALID_EMAIL);
  //   userEvent.type(password, VALID_PASSWORD);
  //   expect(loginButton).not.toBeDisabled();
  //   userEvent.click(loginButton);

  //   await waitFor(
  //     () => expect(pathname).not.toBe('/login'),
  //     { timeout: 3000 },
  //   );

    // console.log(pathname);

    // expect(pathname).not.toBe('/login');

    // expect(pathname).toMatch('/customer/products');
  });
});
