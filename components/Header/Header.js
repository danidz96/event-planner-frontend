import { Box, HStack, Text, Avatar } from '@chakra-ui/react';
import { useSession } from 'next-auth/client';

const Header = () => {
  const [session] = useSession();

  if (!session) {
    return null;
  }

  return (
    <Box w={'100%'} p={5}>
      <HStack justify="space-between">
        <Text isTruncated>Hello, {session.user.name}</Text>
        <Avatar size="sm" name={session.user.name} src={session.user.image} />
      </HStack>
    </Box>
  );
};

export default Header;
