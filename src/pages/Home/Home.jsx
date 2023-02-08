import { Box } from 'components/Box/Box';

export const Home = () => {
  return (
    <Box
      fontSize={28}
      width={600}
      mx="auto"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <p>Welcome to Phonebook App</p>
    </Box>
  );
};
