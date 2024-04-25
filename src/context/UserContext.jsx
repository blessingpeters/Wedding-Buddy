/* eslint-disable react/prop-types */
import { createContext, useContext, useState} from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userType, setUserType] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const login = (type) => {
    setUserType(type);
    setIsAuthenticated(true);
  };
  const logout = () => {
    setUserType(null);
    setIsAuthenticated(false);
  };


  return (
    <UserContext.Provider value={{ userType,isAuthenticated, setUserType,  login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
