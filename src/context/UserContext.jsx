/* eslint-disable react/prop-types */
import { createContext, useContext, useState} from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userType, setUserType] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);



  const login = (type) => {
    // localStorage.setItem('userType', type);
    // localStorage.setItem('isAuthenticated', 'true');
    setUserType(type);
    setIsAuthenticated(true);
  };

  const logout = () => {
    // localStorage.removeItem('userType');
    // localStorage.removeItem('isAuthenticated');
    setUserType(null);
    setIsAuthenticated(false);
  };


  return (
    <UserContext.Provider value={{ userType,isAuthenticated, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
