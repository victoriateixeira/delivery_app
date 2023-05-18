import React, { useState, useMemo } from 'react';
import { node } from 'prop-types';
import AdminContext from './AdminContext';
import { requestAPI, deleteAPI } from '../services/deliveryAPI';

export default function AdminProvider({ children }) {
  const [userList, setUserList] = useState([]);

  const getUsers = async () => {
    const response = await requestAPI('/user');
    setUserList(response);
  };

  const removesUser = async (user) => {
    console.log(user);
    const newUserList = await deleteAPI(`/admin/manage/${user.id}`);
    setUserList(newUserList);
    getUsers();
    // adicionar lógica para deletar do banco de dados
  };

  const value = useMemo(() => ({
    userList,
    setUserList,
    removesUser,
    getUsers,
  }), [userList]);

  return (
    <AdminContext.Provider value={ value }>
      { children }
    </AdminContext.Provider>
  );
}

AdminProvider.propTypes = {
  children: node.isRequired,
};
