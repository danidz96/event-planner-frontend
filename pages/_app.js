import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import MainLayout from '../layouts/Main';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
        <Navbar />
      </MainLayout>
    </ChakraProvider>
  );
}

export default MyApp;
