import { Flex, VStack } from '@chakra-ui/layout';

const MainLayout = ({ children }) => (
  <Flex justify="center" alignItems="center" h="100vh">
    <VStack w={['100vw', 'md']} h={['100vh', '80vh']} bg="white" boxShadow="md" spacing="0" position="relative">
      {children}
    </VStack>
  </Flex>
);

export default MainLayout;
