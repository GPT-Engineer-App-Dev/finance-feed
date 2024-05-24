import { Box, Flex, Link, useColorModeValue } from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} py={4} mt={10}>
      <Flex justifyContent={"center"}>
        <Link as={RouterLink} to="/about" mx={2}>About</Link>
        <Link as={RouterLink} to="/contact" mx={2}>Contact</Link>
        <Link as={RouterLink} to="/privacy-policy" mx={2}>Privacy Policy</Link>
      </Flex>
    </Box>
  );
};

export default Footer;