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
  IconButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  Header,
  TodoCard,
  AnimatedItems,
  TodoStatus,
} from "components";
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
    <Box maxW="100vw" overflowX={"hidden"} w={{base:"100%",md:"full"}}>
      <Header clearTodos={clearTodos} />
      <Center>
        <Flex flexDir="column" w={{md:"full"}} px={{base:10,md:40,md:60}}>
          <Box>
            <Text fontWeight="600"  textAlign={{base:"center",md:"left"}} fontSize={{base:"1.5rem",md:"2rem"}} mt={10}>
              Welcome back
            </Text>
            <Text
              textAlign={{base:"center",md:"left"}}
              color={useColorModeValue("gray.500", "gray.400")}
            >
              You've got {todos.length} task this week
            </Text>
          </Box>
          <InputGroup mt={8} w={{ base: "90%", md: "full" }}>
            <InputLeftElement pointerEvents="none">
              <IconButton size="xs" p={2} as={AddIcon} color="white" bg="blue.300" />
            </InputLeftElement>
            <Input
              aria-label="Create todos input"
              placeholder="Create new todo"
              value={value}
              onKeyDown={(e) => handleKeyDown(e)}
              onChange={(event) => setValue(event.currentTarget.value)}
            />
          </InputGroup>

          {/* Todo Cards */}
          <Grid gap={4} w="full" pb={20}>
            {[...todos.filter((todo) => todo.isCompleted === true)].length ===
              todos.length &&
              todos.length > 0 && <TodoStatus status={"completed"} />}
            {todos.length === 0 ? (
              <TodoStatus status={"none"} />
            ) : (
              <React.Fragment>
                <Text textAlign="left" w="100%" pt={10} mb={-3}>
                  Completed - {" "}
                  {
                    [...todos.filter((todo) => todo.isCompleted === true)]
                      .length
                  }
                </Text>
                <AnimatedItems>
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
              </React.Fragment>
            )}
          </Grid>
        </Flex>
      </Center>
    </Box>
  );
};
export default TodoList;
