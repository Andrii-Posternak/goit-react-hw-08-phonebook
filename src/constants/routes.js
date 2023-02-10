import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/Auth/authSelectors';

export const routes = {
  home: '/',
  register: '/register',
  login: '/login',
  contacts: '/contacts',
};

export const PrivateRoute = ({ component }) => {
  const isAuth = useSelector(selectToken);

  return isAuth ? component : <Navigate to={routes.login} />;
};

export const PublicRoute = ({ component }) => {
  const isAuth = useSelector(selectToken);

  return !isAuth ? component : <Navigate to={routes.contacts} />;
};
