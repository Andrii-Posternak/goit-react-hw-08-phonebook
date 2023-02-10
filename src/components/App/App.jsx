import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from 'redux/Auth/authOperations';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { PrivateRoute, PublicRoute, routes } from 'constants/routes';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';
import { Contacts } from 'pages/Contacts/Contacts';

export const App = () => {
  // // ============================
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  // ==========================

  return (
    <Routes>
      <Route path={routes.home} element={<SharedLayout />}>
        <Route
          path={routes.register}
          element={<PublicRoute component={<Register />} />}
        />
        <Route
          path={routes.login}
          element={<PublicRoute component={<Login />} />}
        />
        <Route
          path={routes.contacts}
          element={<PrivateRoute component={<Contacts />} />}
        />
        <Route path="*" element={<Navigate to={routes.home} />} />
      </Route>
    </Routes>
  );
};
