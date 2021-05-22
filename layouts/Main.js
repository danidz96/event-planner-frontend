import { Box, Flex } from '@chakra-ui/layout';

const MainLayout = ({ children }) => (
  <Flex justify="center" alignItems="center" h="100vh">
    <Box w={['100vw', 'md']} h={['100vh', '80vh']} bg="white" boxShadow="md" spacing="0" position="relative">
      {children}
    </Box>
  </Flex>
);

export default MainLayout;
