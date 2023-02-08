import { Box } from 'components/Box/Box';
import { Input, Label } from 'components/ContactForm/ContactForm.styled';

export const LoginForm = () => {
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
        <p>Please, enter your emal and password</p>
        <Label>
          E-mail
          <Input type="email" name="email" required />
        </Label>
        <Label>
          Password
          <Input type="text" name="password" required />
        </Label>
        <button type="submit">Login</button>
      </form>
    </Box>
  );
};
