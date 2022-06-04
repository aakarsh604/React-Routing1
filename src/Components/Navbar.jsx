import React from "react";
import { Flex, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Flex w="50%" m="auto" mt="15px">
        <Spacer />
        <Button colorScheme="blue">
          <Link to="">Home</Link>
        </Button>
        <Spacer />
        <Button colorScheme="blue">
          <Link to="/products">Products</Link>
        </Button>
        <Spacer />
        <Button colorScheme="blue">
          <Link to="/haleuigha">About Us</Link>
        </Button>
        <Spacer />
      </Flex>
    </div>
  );
};

export default Navbar;
