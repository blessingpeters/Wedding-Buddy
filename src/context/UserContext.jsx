/* eslint-disable react/prop-types */
import { createContext, useContext, useState} from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userType, setUserType] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState({});



  const login = (type, details) => {
    setUserType(type);
    setIsAuthenticated(true);
    setUserData(details);
  };

  const logout = () => {
    setUserType(null);
    setIsAuthenticated(false);
    setUserData({});
  };


  return (
    <UserContext.Provider value={{ userType,isAuthenticated, userData, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
