import { UserMenu } from 'components/UserMenu/UserMenu';
import { routes } from 'constants/routes';
import { Link, NavLink, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();
  return (
    <div>
      <header>
        <h1>Phonebook</h1>
        <NavLink to={routes.home}>Home</NavLink>
        <br />
        {location.pathname !== routes.home && (
          <NavLink to={routes.contacts}>Contacts</NavLink>
        )}
        <br />
        {location.pathname !== routes.contacts && (
          <>
            <button type="button">
              <Link to={routes.login}>Login</Link>
            </button>
            <button type="button">
              <Link to={routes.register}>Register</Link>
            </button>
          </>
        )}
        {location.pathname !== routes.home && <UserMenu />}
      </header>
    </div>
  );
};
