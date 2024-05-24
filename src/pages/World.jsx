import { Box, Heading, Text } from "@chakra-ui/react";

const World = () => {
  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>World News</Heading>
      <Text>Latest updates from around the world.</Text>
    </Box>
  );
};

export default World;