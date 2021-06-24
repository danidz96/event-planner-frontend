import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';
import { Flex, HStack, Icon } from '@chakra-ui/react';
import { HomeIcon, CalendarIcon, UserIcon } from '@heroicons/react/outline';
import NavLink from '../NavLink';

const NAVBAR_LINKS = [
  {
    href: '/',
    icon: HomeIcon,
  },
  {
    href: '/events',
    icon: CalendarIcon,
  },
  {
    href: '/user',
    icon: UserIcon,
  },
];

const Navbar = () => {
  const router = useRouter();
  const [session] = useSession();

  if (!session) {
    return null;
  }

  return (
    <Flex w="full" borderTopWidth="1px" justify="center">
      <HStack as="nav" h={14} w="90%" justify="space-between" alignItems="center">
        {NAVBAR_LINKS.map(({ href, icon }) => (
          <NavLink href={href}>
            <Icon as={icon} w={6} h={6} color={router.pathname === href ? 'teal.400' : 'gray.700'} />
          </NavLink>
        ))}
      </HStack>
    </Flex>
  );
};

export default Navbar;
