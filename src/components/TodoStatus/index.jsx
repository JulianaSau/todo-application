import { Text, Icon, HStack } from "@chakra-ui/react";
import { BsCheckCircle } from "react-icons/bs";
import React from "react";

const CompletedText = "Congratulations. You've completed all your todos🥳"
const NoTodosText = "You're all caught up😁. When you add a new todo, it will appear here"

const TodoStatus = ({status}) => {
  return (<HStack
    h="100%"
    alignItems="left"
    justify="left"
    textAlign={"left"}
    w="100%"
    pt="10"
  >
    <Icon as={BsCheckCircle} h="24px" w="24px" color="blue.300" />
    <Text color="gray.400">
      {status === "completed" ? CompletedText : null}
      {status === "none" ? NoTodosText : null}
    </Text>
  </HStack>)
};

export default TodoStatus

