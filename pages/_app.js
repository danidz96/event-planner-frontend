import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import MainLayout from '../layouts/Main';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  );
}

export default MyApp;
