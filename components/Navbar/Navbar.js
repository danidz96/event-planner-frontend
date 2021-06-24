import { Flex, HStack, IconButton, Icon } from '@chakra-ui/react';
import { HomeIcon, CalendarIcon, UserIcon } from '@heroicons/react/outline';
import { useSession } from 'next-auth/client';
import NavLink from './NavLink';

const Navbar = () => {
  const [session] = useSession();

  if (!session) {
    return null;
  }

  return (
    <Flex w="full" borderTopWidth="1px" justify="center">
      <HStack as="nav" h={14} w="90%" justify="space-between" alignItems="center">
        <NavLink>
          <Icon as={HomeIcon} w={6} h={6} color="gray.900" />
        </NavLink>

        <NavLink>
          <Icon as={CalendarIcon} w={6} h={6} color="gray.900" />
        </NavLink>

        <NavLink>
          <Icon as={UserIcon} w={6} h={6} color="gray.900" />
        </NavLink>
      </HStack>
    </Flex>
  );
};

export default Navbar;
