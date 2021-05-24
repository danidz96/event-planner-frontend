import { VStack } from '@chakra-ui/layout';
import GoogleButton from 'react-google-button';
import { signIn } from 'next-auth/client';

const Login = () => {
  const redirectToGoogleLogin = () => {
    signIn('google', { callbackUrl: process.env.NEXT_PUBLIC_AUTH_URL });
  };

  return (
    <VStack justify="center" m="auto">
      <GoogleButton onClick={redirectToGoogleLogin} />
    </VStack>
  );
};

export default Login;
