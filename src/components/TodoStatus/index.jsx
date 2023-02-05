import { Stack, Text, Icon } from "@chakra-ui/react";
import { BsCheckCircle } from "react-icons/bs";
import React from "react";

export const CompletedTodos = () => {
  return (<Stack
    h="100%"
    alignItems="center"
    justify="center"
    textAlign={"center"}
    w="100%"
    pt="10"
  >
    <Icon as={BsCheckCircle} h="50px" w="50px" color="blue.300" />
    <Text color="gray.400">
      Congratulations. You've completed all your todos🥳
    </Text>
  </Stack>)
};

export const NoTodos = () => {
  return (
    <Stack
      h="300px"
      alignItems="center"
      justify="center"
      textAlign={"center"}
      w="100%"
      pt="5"
    >
      <Icon as={BsCheckCircle} h="50px" w="50px" color="blue.300" />
      <Text color="gray.400" w="60%" textAlign={"center"}>
        You're all caught up😁. When you add a new todo, it will appear
        here
      </Text>
    </Stack>
  );
};
