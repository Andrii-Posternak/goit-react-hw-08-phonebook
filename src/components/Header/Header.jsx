import { useSelector } from 'react-redux';
import { MdOutlineContactPhone } from 'react-icons/md';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { selectIsAuth } from 'redux/Auth/authSelectors';
import { HeaderWrap, Logo } from 'components/Header/Header.styled';
import { Container } from 'components/Containers/Containers.styled';

export const Header = () => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <Container>
      <HeaderWrap>
        <Logo>
          <MdOutlineContactPhone />
          Phonebook
        </Logo>
        {!isAuth ? <AuthNav /> : <UserMenu />}
      </HeaderWrap>
    </Container>
  );
};
