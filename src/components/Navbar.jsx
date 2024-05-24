import { Box, Flex, Link, HStack, useColorModeValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={8} alignItems={"center"}>
          <NavLink to="/">
            <Link>Home</Link>
          </NavLink>
          <NavLink to="/world">
            <Link>World</Link>
          </NavLink>
          <NavLink to="/business">
            <Link>Business</Link>
          </NavLink>
          <NavLink to="/tech">
            <Link>Tech</Link>
          </NavLink>
          <NavLink to="/opinion">
            <Link>Opinion</Link>
          </NavLink>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;