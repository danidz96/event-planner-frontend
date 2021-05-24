import { Box, Text } from '@chakra-ui/layout';
import { getSession } from 'next-auth/client';

export default function Home({ session }) {
  return (
    <Box overflowY="auto">
      <Text>{session?.user?.name}</Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ex cupiditate soluta, facilis dignissimos
        consequuntur fugiat vel veritatis praesentium odit doloribus, quis iure quae, numquam corporis. Consequatur
        atque perspiciatis fugit perferendis, delectus voluptates ipsum sint debitis sequi quidem quam, eos, ullam
        praesentium minus dolorum. Quaerat voluptate corporis quis nostrum deserunt commodi, provident illum, incidunt
        quos accusantium perspiciatis nulla sequi. Eius beatae, reiciendis doloribus deleniti reprehenderit iure sit.
        Minus sed quidem laudantium iste saepe consequatur nulla sunt quis. Debitis, necessitatibus voluptatum sint
        nostrum eligendi exercitationem possimus distinctio tenetur voluptate iste itaque incidunt explicabo inventore
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ex cupiditate soluta, facilis dignissimos
        consequuntur fugiat vel veritatis praesentium odit doloribus, quis iure quae, numquam corporis. Consequatur
        atque perspiciatis fugit perferendis, delectus voluptates ipsum sint debitis sequi quidem quam, eos, ullam
        praesentium minus dolorum. Quaerat voluptate corporis quis nostrum deserunt commodi, provident illum, incidunt
        quos accusantium perspiciatis nulla sequi. Eius beatae, reiciendis doloribus deleniti reprehenderit iure sit.
        Minus sed quidem laudantium iste saepe consequatur nulla sunt quis. Debitis, necessitatibus voluptatum sint
        nostrum eligendi exercitationem possimus distinctio tenetur voluptate iste itaque incidunt explicabo inventore
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ex cupiditate soluta, facilis dignissimos
        consequuntur fugiat vel veritatis praesentium odit doloribus, quis iure quae, numquam corporis. Consequatur
        atque perspiciatis fugit perferendis, delectus voluptates ipsum sint debitis sequi quidem quam, eos, ullam
        praesentium minus dolorum. Quaerat voluptate corporis quis nostrum deserunt commodi, provident illum, incidunt
        quos accusantium perspiciatis nulla sequi. Eius beatae, reiciendis doloribus deleniti reprehenderit iure sit.
        Minus sed quidem laudantium iste saepe consequatur nulla sunt quis. Debitis, necessitatibus voluptatum sint
        nostrum eligendi exercitationem possimus distinctio tenetur voluptate iste itaque incidunt explicabo inventore
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ex cupiditate soluta, facilis dignissimos
        consequuntur fugiat vel veritatis praesentium odit doloribus, quis iure quae, numquam corporis. Consequatur
        atque perspiciatis fugit perferendis, delectus voluptates ipsum sint debitis sequi quidem quam, eos, ullam
        praesentium minus dolorum. Quaerat voluptate corporis quis nostrum deserunt commodi, provident illum, incidunt
        quos accusantium perspiciatis nulla sequi. Eius beatae, reiciendis doloribus deleniti reprehenderit iure sit.
        Minus sed quidem laudantium iste saepe consequatur nulla sunt quis. Debitis, necessitatibus voluptatum sint
        nostrum eligendi exercitationem possimus distinctio tenetur voluptate iste itaque incidunt explicabo inventore
      </Text>
    </Box>
  );
}

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  return {
    props: {
      session,
    },
  };
};
