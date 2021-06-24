import NextLink from 'next/link';
import { Link, useColorModeValue } from '@chakra-ui/react';

const NavLink = ({ children, href }) => (
  <NextLink href={href} passHref>
    <Link
      px={2}
      py={1}
      flex={1}
      rounded={'md'}
      textAlign="center"
      _hover={{
        textDecoration: 'none',
      }}
      _focus={{ boxShadow: 'none' }}
    >
      {children}
    </Link>
  </NextLink>
);

export default NavLink;
