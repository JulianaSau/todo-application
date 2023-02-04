import {
  Box,
  Center,
  Flex,
  Input,
  Text,
  useColorModeValue,
  Grid,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Header, TodoCard, AnimatedItems } from "components";
import useTodos from "hooks/useTodos";
import { AddIcon } from "@chakra-ui/icons";

const TodoList = () => {
  const [value, setValue] = useState("");
  const {
    todos,
    addTodo,
    clearTodos,
    removeTodo,
    toggleCompleteTodo,
    updateTodo,
  } = useTodos([]);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      addTodo({ text: value });
      setValue("");
    }
  }
  return (
    <>
      <Header clearTodos={clearTodos} />
      <Center>
        <Flex flexDir="column" w="lg" align="center">
          <Box>
            <Text fontWeight="600" fontSize="2.5rem" mt={10}>
              Welcome back
            </Text>
            <Text
              textAlign={"center"}
              color={useColorModeValue("gray.500", "gray.400")}
            >
              You've got {todos.length} task this week
            </Text>
          </Box>
          <InputGroup mt={3} w={{ base: "90%", md: "30vw" }}>
            <InputLeftElement pointerEvents="none">
              <AddIcon color="gray.300" />
            </InputLeftElement>
            <Input
              
              aria-label="Create todos input"
              placeholder="Create new todo"
              
              value={value}
              onKeyDown={(e) => handleKeyDown(e)}
              onChange={(event) => setValue(event.currentTarget.value)}
            />
          </InputGroup>
          <Text mt={7} mb={3}>
            Total - {todos.length} {"   "} Completed -{" "}
            {[...todos.filter((todo) => todo.isCompleted === true)].length}
          </Text>

          {/* Todo Cards */}
          <Grid gap={4} w="100%" pb={20}>
            <AnimatedItems>
              {/* ToDo: add empty state view  */}
              {/* ToDo: add completed all tasks state view  */}
              {todos.map((todo) => {
                return (
                  <TodoCard
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                    completeTodo={toggleCompleteTodo}
                    updateTodo={updateTodo}
                  />
                );
              })}
            </AnimatedItems>
          </Grid>
        </Flex>
      </Center>
    </>
  );
};
export default TodoList;
