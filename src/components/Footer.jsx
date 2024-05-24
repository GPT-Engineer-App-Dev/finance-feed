import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" px={4} py={2} mt={10}>
      <Flex justify="center">
        <Link as={NavLink} to="/about" px={2} py={1} _hover={{ textDecoration: "none", bg: "gray.700" }}>
          About
        </Link>
        <Link as={NavLink} to="/contact" px={2} py={1} _hover={{ textDecoration: "none", bg: "gray.700" }}>
          Contact
        </Link>
        <Link as={NavLink} to="/privacy" px={2} py={1} _hover={{ textDecoration: "none", bg: "gray.700" }}>
          Privacy Policy
        </Link>
      </Flex>
      <Text textAlign="center" mt={2} fontSize="sm">
        &copy; {new Date().getFullYear()} Financial Times. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;