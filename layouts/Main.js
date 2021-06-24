import { Flex, VStack, useColorModeValue } from '@chakra-ui/react';

const MainLayout = ({ children }) => {
  const bg = useColorModeValue('white', 'gray.900');

  return (
    <Flex justify="center" alignItems="center" h="100vh">
      <VStack w={['100vw', 'md']} h={['100vh', '80vh']} bg={bg} boxShadow="md" position="relative">
        {children}
      </VStack>
    </Flex>
  );
};

export default MainLayout;
