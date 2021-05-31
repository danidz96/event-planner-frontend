import { Box } from '@chakra-ui/layout';
import Header from '../components/Header/Header';

export default function Home() {
  return (
    <Box overflowY="auto" w="100%" flexGrow={1}>
      <Header />
    </Box>
  );
}
