import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { selectFilteredContact } from 'redux/selectors';
import {
  List,
  ContactItem,
  Button,
  ContainerList,
} from 'components/ContactList/ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContact = useSelector(selectFilteredContact);

  return (
    <ContainerList>
      <Loader />
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
    </ContainerList>
  );
};
