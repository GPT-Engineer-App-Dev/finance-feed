import { Container, Text, VStack, Box, Heading, SimpleGrid } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} align="stretch">
        <Box>
          <Heading as="h1" size="xl" mb={4}>Latest News</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">News Article 1</Heading>
              <Text mt={4}>Summary of the news article 1.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">News Article 2</Heading>
              <Text mt={4}>Summary of the news article 2.</Text>
            </Box>
          </SimpleGrid>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>Trending</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="lg">Trending Article 1</Heading>
              <Text mt={4}>Summary of the trending article 1.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="lg">Trending Article 2</Heading>
              <Text mt={4}>Summary of the trending article 2.</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;