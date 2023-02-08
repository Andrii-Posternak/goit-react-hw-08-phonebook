import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Box } from 'components/Box/Box';
import { Title, TitleList } from 'components/App/App.styled';
import { selecError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export const Contacts = () => {
  const dispatch = useDispatch();
  const error = useSelector(selecError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (error) return <p>Download error</p>;

  return (
    <Box
      fontSize={28}
      width={600}
      mx="auto"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Title>Phonebook</Title>
      <ContactForm />
      <TitleList>Contacts</TitleList>
      <Filter />
      <ContactList />
    </Box>
  );
};
