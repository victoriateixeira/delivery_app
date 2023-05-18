import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import AdminContext from '../contexts/AdminContext';
import UserCard from '../components/UserCard';
import validationInputs from '../utils/validationInputs';
import { postAPI } from '../services/deliveryAPI';

export default function Admin() {
  const { userList, setUserList, getUsers } = useContext(AdminContext);
  const [conflict, setConflict] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [newUser, setNewUser] = useState({ sellerName: '',
    email: '',
    password: '',
    role: 'customer' });

  useEffect(() => {
    const execData = async () => getUsers();

    execData();
  }, []);

  // const isRegisterButtonDisabled = () => {
  //   const isRole = role === 'P. Vendedora' || role === 'Cliente';

  //   return (isSellerName && isEmail && isPassword && isRole);
  // };

  useEffect(() => {
    const SELLER_NAME_LENGTH = 11;
    const { sellerName, email, password } = newUser;
    const validationGeneral = validationInputs(email, password);
    const isSellerName = sellerName.length > SELLER_NAME_LENGTH;
    setDisabled(!(validationGeneral && isSellerName));
  }, [newUser]);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const registerUser = async (user) => {
    try {
      console.log('HI');
      console.log(user);
      const addUser = await postAPI('/admin/manage', user);
      console.log(addUser);
      setUserList([...userList, addUser]);
      setConflict(false);
    } catch (err) {
      setConflict(true);
    }
  };

  const onRegisterButtonClick = async (event) => {
    event.preventDefault();

    const addUser = {
      name: newUser.sellerName,
      email: newUser.email,
      password: newUser.password,
      role: newUser.role,
    };

    console.log(addUser);

    await registerUser(addUser);

    setNewUser({
      sellerName: '',
      email: '',
      password: '',
      role: 'customer',
    });

    console.log(userList);
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
            disabled={ disabled }
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
