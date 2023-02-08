import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { routes } from 'constants/routes';
import { Home } from 'pages/Home/Home';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';
import { Contacts } from 'pages/Contacts/Contacts';

export const App = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path={routes.register} element={<Register />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.contacts} element={<Contacts />} />
        <Route path="*" element={<Navigate to={routes.home} />} />
      </Route>
    </Routes>
  );
};
