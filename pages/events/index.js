import { VStack, Button, useColorMode, Text } from '@chakra-ui/react';

function Events() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <VStack>
      <Text>Events</Text>
      <Button colorScheme="blue" onClick={toggleColorMode}>
        {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </VStack>
  );
}

export default Events;
