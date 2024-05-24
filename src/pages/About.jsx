import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>About Us</Heading>
      <Text>Information about the Financial Times website.</Text>
    </Box>
  );
};

export default About;