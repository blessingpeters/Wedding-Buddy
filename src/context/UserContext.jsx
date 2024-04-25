/* eslint-disable react/prop-types */
import { createContext, useContext, useState} from 'react';
//import { getAuth, onAuthStateChanged } from 'firebase/auth';

const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userType, setUserType] = useState(null);




  const login = (type) => setUserType(type);
  const logout = () => setUserType(null);

  return (
    <UserContext.Provider value={{ userType, setUserType,  login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
