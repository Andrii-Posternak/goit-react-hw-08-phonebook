import { Box } from 'components/Box/Box';
import { Input, Label } from 'components/ContactForm/ContactForm.styled';

export const RegistrationForm = () => {
  return (
    <Box
      fontSize={28}
      width={600}
      mx="auto"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      backgroundColor="#e0e0e0"
    >
      <form>
        <p>Please, register</p>
        <Label>
          User name
          <Input type="text" name="name" required />
        </Label>
        <Label>
          E-mail
          <Input type="email" name="email" required />
        </Label>
        <Label>
          Password
          <Input type="text" name="password" required />
        </Label>
        <button type="submit">Register</button>
      </form>
    </Box>
  );
};
