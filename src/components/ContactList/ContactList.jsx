import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';
import { deleteContact, updateContact } from 'redux/operations';
import { selectFilteredContact } from 'redux/selectors';
import {
  List,
  ContactItem,
  Button,
} from 'components/ContactList/ContactList.styled';
import { Container } from 'components/Containers/Containers.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContact = useSelector(selectFilteredContact);

  return (
    <Container>
      <Loader />
      <List>
        {filteredContact.map(({ id, name, number }) => (
          <ContactItem key={id}>
            {name}: {number}
            {/* <Button type="button" onClick={() => dispatch(updateContact(id))}>
              Update
            </Button> */}
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Button>
          </ContactItem>
        ))}
      </List>
    </Container>
  );
};
