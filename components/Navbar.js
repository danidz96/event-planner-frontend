import { Box, HStack } from '@chakra-ui/layout';
import { useSession } from 'next-auth/client';

const Navbar = () => {
  const [session] = useSession();
  if (!session) {
    return null;
  }

  return (
    <HStack w="100%">
      <Box h="60px" w="100%">
        Home
      </Box>
    </HStack>
  );
};

export default Navbar;
