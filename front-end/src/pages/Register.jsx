import React from 'react';

function Register() {
  return (
    <main className="register-container">
      <h1>Cadastro</h1>
      <form>
        <label htmlFor="nome">
          Nome
          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            data-testid="common_register__input-name"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="seu-email@site.com.br"
            data-testid="common_register__input-email"
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            placeholder="******************"
            data-testid="common_register__input-password"
          />
        </label>
        <button
          type="button"
          data-testid="common_register__button-register"
        >
          Cadastrar
        </button>
      </form>
      <p
        id="form-invalid-text"
        hidden
      >
        Elemento oculto (Mensagem de erro)
      </p>
    </main>
  );
}

export default Register;
