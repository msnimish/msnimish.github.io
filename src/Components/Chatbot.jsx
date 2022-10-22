import { Container, Icon } from "@chakra-ui/react";
import React from "react";
import { ChatIcon } from "@chakra-ui/icons";

const Chatbot = () => {
  return <Container pos={"fixed"} bottom={20} right={20} bg={"#331651"} borderRadius={"50%"}>
    <Icon as={ChatIcon} p={10} color={"white"}></Icon>
  </Container>;
};

export default Chatbot;
