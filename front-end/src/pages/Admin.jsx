import React, { useContext, useState } from 'react';
import NavBar from '../components/NavBar';
import AdminContext from '../contexts/AdminContext';
import UserCard from '../components/UserCard';

export default function Admin() {
  const { userList, setUserList } = useContext(AdminContext);
  const [newUser, setNewUser] = useState({ sellerName: '',
    email: '',
    password: '',
    role: 'Cliente' });
  const [conflict, setConflict] = useState(false);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const registerUser = async (user) => {
    try {
      await postAPI('/user/register', user);
    } catch (err) {
      setConflict(true);
    }
  };

  const onRegisterButtonClick = (event) => {
    event.preventDefault();
    const addUser = {
      name: newUser.sellerName,
      email: newUser.email,
      password: newUser.password,
      role: newUser.role,
    };
    setUserList([...userList, addUser]);
    registerUser(addUser);
    setNewUser('');
  };

  const isRegisterButtonDisabled = () => {
    const { sellerName, email, password, role } = newUser;
    const isSellerName = sellerName.length > 11;
    const isEmail = email.includes('@' && '.com');
    const isPassword = password.length > 5;
    const isRole = role === 'P. Vendedora' || role === 'Cliente';

    return isSellerName && isEmail && isPassword && isRole;
  };

  return (
    <>
      <NavBar />

      <div>
        <h1>Cadastrar novo usuário</h1>
        <form>
          <label htmlFor="name">
            Nome
            <input
              type="text"
              name="sellerName"
              id="name"
              value={ newUser.sellerName }
              onChange={ onInputChange }
              data-testid="admin_manage__input-name"
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              id="email"
              value={ newUser.email }
              onChange={ onInputChange }
              data-testid="admin_manage__input-email"
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              type="password"
              name="password"
              id="password"
              value={ newUser.password }
              onChange={ onInputChange }
              data-testid="admin_manage__input-password"
            />
          </label>
          <label htmlFor="role">
            Tipo
            <select
              name="role"
              id="role"
              value={ newUser.role }
              onChange={ onInputChange }
              data-testid="admin_manage__select-role"
            >
              <option value="seller" selected>P. Vendedora</option>
              <option value="customer">Cliente</option>
            </select>
          </label>
          <button
            type="submit"
            id="register"
            data-testid="admin_manage__button-register"
            disabled={ !isRegisterButtonDisabled() }
            onClick={ onRegisterButtonClick }
          >
            Cadastrar
          </button>
        </form>
        <p
          id="form-invalid-text"
          hidden={ !conflict }
          data-testid="admin_manage__element-invalid-register"
        >
          Usuário já existe!
        </p>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Tipo</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            {userList.length > 0
            && userList.map((user, index) => (
              <tr key={ user.id }>
                <UserCard savedUser={ user } index={ index } />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
