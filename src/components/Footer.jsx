import { Box, Flex, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} py={4} mt={8}>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <NavLink to="/about">
          <Link mx={2}>About</Link>
        </NavLink>
        <NavLink to="/contact">
          <Link mx={2}>Contact</Link>
        </NavLink>
        <NavLink to="/privacy-policy">
          <Link mx={2}>Privacy Policy</Link>
        </NavLink>
      </Flex>
      <Text textAlign="center" mt={4}>
        &copy; {new Date().getFullYear()} Financial Times. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;