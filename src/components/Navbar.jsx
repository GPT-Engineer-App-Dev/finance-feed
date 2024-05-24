import { Box, Flex, Link, HStack, useColorModeValue } from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={8} alignItems={"center"}>
          <Box fontWeight="bold" fontSize="xl">Financial Times</Box>
          <HStack
            as={"nav"}
            spacing={4}
            display={{ base: "none", md: "flex" }}
          >
            <Link as={RouterLink} to="/" px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: useColorModeValue("gray.200", "gray.700") }}>Home</Link>
            <Link as={RouterLink} to="/world" px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: useColorModeValue("gray.200", "gray.700") }}>World</Link>
            <Link as={RouterLink} to="/business" px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: useColorModeValue("gray.200", "gray.700") }}>Business</Link>
            <Link as={RouterLink} to="/tech" px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: useColorModeValue("gray.200", "gray.700") }}>Tech</Link>
            <Link as={RouterLink} to="/opinion" px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: useColorModeValue("gray.200", "gray.700") }}>Opinion</Link>
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;