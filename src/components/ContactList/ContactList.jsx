import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectFilteredContact } from 'redux/selectors';
import {
  List,
  ContactItem,
  Button,
} from 'components/ContactList/ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContact = useSelector(selectFilteredContact);

  console.log('list');

  return (
    <List>
      {filteredContact.map(({ id, name, number }) => (
        <ContactItem key={id}>
          {name}: {number}
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </ContactItem>
      ))}
    </List>
  );
};
