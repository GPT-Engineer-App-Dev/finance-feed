import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction={{ base: "column", md: "row" }} justify="space-between">
        <Box flex="3" mr={{ md: 4 }}>
          <Heading as="h1" size="xl" mb={4}>
            Latest News
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">News Article 1</Heading>
              <Text mt={4}>Summary of the news article...</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">News Article 2</Heading>
              <Text mt={4}>Summary of the news article...</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">News Article 3</Heading>
              <Text mt={4}>Summary of the news article...</Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" mt={{ base: 4, md: 0 }}>
          <Heading as="h2" size="lg" mb={4}>
            Trending
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading fontSize="lg">Trending Article 1</Heading>
              <Text mt={4}>Summary of the trending article...</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading fontSize="lg">Trending Article 2</Heading>
              <Text mt={4}>Summary of the trending article...</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;