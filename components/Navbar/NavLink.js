import { Link, useColorModeValue } from '@chakra-ui/react';

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    // w={'80%'}
    // mx={6}
    flex={1}
    rounded={'md'}
    textAlign="center"
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
);

export default NavLink;
