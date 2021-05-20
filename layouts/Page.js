import Wrapper from './Wrapper';

const Page = ({ children }) => (
  <main className="main">
    <Wrapper>{children}</Wrapper>
  </main>
);

export default Page;
