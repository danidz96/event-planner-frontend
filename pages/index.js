import { Box, Flex, Stack, VStack } from '@chakra-ui/layout';
import Navbar from '../components/Navbar';
import MainLayout from '../layouts/Main';

export default function Home() {
  return (
    <VStack w={['100vw', 'md']} h={['100vh', '80vh']} bg="white" boxShadow="md" spacing="0" position="relative">
      <Box w="100%" h="100%" overflowY="auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ex cupiditate soluta, facilis dignissimos
        consequuntur fugiat vel veritatis praesentium odit doloribus, quis iure quae, numquam corporis. Consequatur
        atque perspiciatis fugit perferendis, delectus voluptates ipsum sint debitis sequi quidem quam, eos, ullam
        praesentium minus dolorum. Quaerat voluptate corporis quis nostrum deserunt commodi, provident illum, incidunt
        quos accusantium perspiciatis nulla sequi. Eius beatae, reiciendis doloribus deleniti reprehenderit iure sit.
        Minus sed quidem laudantium iste saepe consequatur nulla sunt quis. Debitis, necessitatibus voluptatum sint
        nostrum eligendi exercitationem possimus distinctio tenetur voluptate iste itaque incidunt explicabo inventore
        numquam dolores, cumque, est rem ut nisi. Dolorum aperiam maiores facilis minima sequi, temporibus cumque ipsa
        reprehenderit reiciendis distinctio mollitia hic quidem recusandae necessitatibus laboriosam provident.
        Similique quasi possimus vel id corrupti laudantium labore rem. Culpa quibusdam labore nobis, iure dolore
        voluptatibus quisquam amet porro animi ipsum placeat molestias distinctio repellendus tempore delectus nam
        exercitationem nostrum sit laboriosam consectetur. Minus, quaerat. Exercitationem consequuntur cupiditate velit
        excepturi molestiae corporis ut perferendis maxime ad, earum nemo totam minus praesentium voluptas id est,
        officia provident sit nobis facere, et voluptatibus adipisci. Aperiam adipisci harum atque magni, autem rem quae
        qui hic et corrupti consectetur rerum, iusto possimus temporibus sit labore ipsum? Delectus et ratione nulla.
        Soluta perferendis tempora, esse illo accusamus nulla sit vel optio. Exercitationem qui ducimus asperiores minus
        sapiente officiis nam enim tempora. Vero aut esse natus explicabo magnam vel iusto impedit nulla cupiditate
        repellendus ut, tempora qui tenetur sit cum! Fugit nemo nostrum libero quia tempora nisi reiciendis. Cum
        perspiciatis deserunt, facere ea iusto veniam vel illum et, rerum obcaecati exercitationem magnam dolorum
        voluptate animi quibusdam explicabo quia ratione deleniti reiciendis assumenda tenetur? Magni possimus tempora
        repellat! Dolor, consequuntur in? Molestias mollitia provident facere, labore ducimus aut voluptatum, unde,
      </Box>
      <Navbar />
    </VStack>
  );
}
