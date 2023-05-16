import React, { useState } from 'react';
import AdminContext from './AdminContext';

export default function AdminProvider() {
  const [userList, setUserList] = useState([]);

  removesUser = (user) => {
    const updatedUserList = userList.filter((u) => u.id !== user.id);
    setUserList(updatedUserList);
    // adicionar lógica para deletar do banco de dados
  };

  const value = useMemo(() => ({
    userList,
    setUserList,
  }), [userList]);

  return (
    <AdminContext.Provider value={ value }>
      { children }
    </AdminContext.Provider>
  );
}
