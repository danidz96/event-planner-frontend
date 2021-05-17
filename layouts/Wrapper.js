import { Box } from '@chakra-ui/layout';

const Wrapper = ({ children }) => (
  <Box maxW={['100%', 'md']} bg="red.200">
    {children}
  </Box>
);

export default Wrapper;
