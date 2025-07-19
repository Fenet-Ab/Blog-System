import React, { createContext, useState, useEffect } from 'react';
import { getUserFromStorage, setUserToStorage, removeUserFromStorage } from '../utils/storage';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getUserFromStorage());

  useEffect(() => {
    setUser(getUserFromStorage());
  }, []);

  const login = (userData) => {
    setUserToStorage(userData);
    setUser(userData);
  };

  const logout = () => {
    removeUserFromStorage();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}