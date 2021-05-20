import { Box, Flex } from '@chakra-ui/layout';
import Page from './Page';

const MainLayout = ({ children }) => (
  <>
    <Flex justify="center">
      <Page>{children}</Page>
    </Flex>
  </>
);

export default MainLayout;
