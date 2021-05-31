import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'next-auth/client';
import Navbar from '../components/Navbar';
import MainLayout from '../layouts/Main';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <MainLayout>
          <Component {...pageProps} />
          <Navbar />
        </MainLayout>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
