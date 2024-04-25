/* eslint-disable react/prop-types */
import { Navigate, useLocation } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useUser();
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect them to the login page, but save the current location they were trying to go to
    return <Navigate to="/auth/coupleLogin" state={{ from: location }} replace />;
  }

  return children;
};
export default PrivateRoute
