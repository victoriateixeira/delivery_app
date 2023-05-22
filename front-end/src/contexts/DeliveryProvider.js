import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import DeliveryContext from './DeliveryContext';

export default function DeliveryProvider({ children }) {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [invalidLogin, setInvalidLogin] = useState(false);

  const value = useMemo(() => ({
    user,
    setUser,
    email,
    setEmail,
    password,
    setPassword,
    isDisabled,
    setIsDisabled,
    invalidLogin,
    setInvalidLogin,
  }), [email, isDisabled, password, invalidLogin, user]);

  return (
    <DeliveryContext.Provider value={ value }>
      { children }
    </DeliveryContext.Provider>
  );
}

DeliveryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
