import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundImage: 'radial-gradient(#BEE3F8 1px, #F7FAFC 1px), radial-gradient(#BEE3F8 1px, #F7FAFC 1px)',
        backgroundPosition: '0 0, 25px, 25px',
        backgroundSize: '50px 50px',
      },
    },
  },
});
