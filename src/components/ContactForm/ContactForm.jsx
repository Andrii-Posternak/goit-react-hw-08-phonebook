import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { Form, Label, Input } from 'components/ContactForm/ContactForm.styled';
import { Button } from 'components/Button/Button.styled';

export const ContactForm = memo(() => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onSubmitForm = event => {
    event.preventDefault();
    const name = event.target.name.value.trim();
    const number = event.target.number.value.trim();

    const isContactExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isContactExist) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact({ name, number }));
      event.target.reset();
    }
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
});
