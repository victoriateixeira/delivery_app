import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DeliveryContext from '../context/DeliveryContext';
import validationInputs from '../utils/validationInputs';

function Login() {
  const {
    isDisabled,
    setIsDisabled,
    email,
    setEmail,
    password,
    setPassword,
  } = useContext(DeliveryContext);

  useEffect(() => {
    const validationGeneral = validationInputs(email, password);
    setIsDisabled(!validationGeneral);
  }, [email, password, isDisabled, setIsDisabled]);

  return (
    <main className="login-container">
      <div className="logo-container">
        {/* <img alt="app-logo" /> */}
        <h1>NOME DO APP</h1>
      </div>
      <form>
        <h1>Login</h1>
        <label htmlFor="email">
          <input
            type="text"
            name="email"
            placeholder="email@trybeer.com.br"
            data-testid="common_login__input-email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <h1>Senha</h1>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            placeholder="******"
            data-testid="common_login__input-password"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
      </form>
      <Link to="/">
        <button
          type="button"
          data-testid="common_login__button-login"
          disabled={ isDisabled }
        >
          LOGIN
        </button>
      </Link>
      <Link to="/register">
        <button
          type="button"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </button>
      </Link>
    </main>
  );
}

export default Login;
