import {
  Box,
  Center,
  Flex,
  Input,
  Text,
  useColorModeValue,
  Grid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Header, TodoCard, AnimatedItems } from "../components";
import useTodos from "../hooks/useTodos";

const TodoList = () => {
  const [value, setValue] = useState("");
  const {todos, addTodo, clearTodos,removeTodo,toggleCompleteTodo} = useTodos([]);

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
          <Input
            mt={3}
            aria-label="Create todos input"
            placeholder="Create new todo"
            w="30vw"
            value={value}
            onKeyDown={(e) => handleKeyDown(e)}
            onChange={(event) => setValue(event.currentTarget.value)}
          />
          <Text mt={7} mb={3}>
            Tasks - {todos.length}
          </Text>

          {/* Todo Cards */}
          <Grid gap={4} w="100%">
            <AnimatedItems>
              {todos.map((todo) => {
                return (
                  // <Flex
                  //   onClick={() => todos.toggleCompleteTodo(todo.id)}
                  //   borderWidth={todo.isCompleted ? "2px" : "0px"}
                  //   borderColor={todo.isCompleted ? "blue.400" : "transparent"}
                  //   cursor={"pointer"}
                  //   minW={{ base: "90vw", md: "420px" }}
                  //   w={{ base: "90vw", md: "420px" }}
                  //   mx="auto"
                  //   bg="white"
                  //   _dark={{
                  //     bg: "gray.700",
                  //   }}
                  //   shadow="md"
                  //   px="5"
                  //   rounded="lg"
                  //   overflow="hidden"
                  //   alignItems={"center"}
                  //   justify="space-between"
                  // >
                  //   <Flex alignItems={"center"} justify="space-between">
                  //     {todo.isCompleted ? (
                  //       <Icon as={FaCheckCircle} color="primary.500" />
                  //     ) : (
                  //       <Flex
                  //         justify={"center"}
                  //         align="center"
                  //         h="15px"
                  //         w="15px"
                  //         bg="white"
                  //         borderRadius="15px"
                  //         borderWidth={"1px"}
                  //         borderColor={borderColor}
                  //       />
                  //     )}
                  //     <Flex alignItems="top" px={2} py={5}>
                  //       <Box mx={3} textAlign="left">
                  //         <chakra.p
                  //           w="100%"
                  //           noOfLines={3}
                  //           color="gray.500"
                  //           _dark={{
                  //             color: "gray.200",
                  //           }}
                  //           textDecoration={todo.isCompleted ? "line-through" : "none"}
                  //         >
                  //           {todo.text}
                  //         </chakra.p>
                  //       </Box>
                  //     </Flex>
                  //   </Flex>
                  //   <Menu>
                  //     <MenuButton
                  //       as={IconButton}
                  //       aria-label="Options"
                  //       icon={<BsThreeDotsVertical />}
                  //       variant="ghost"
                  //     />
                  //     <MenuList>
                  //       <MenuItem icon={<EditIcon />}>Edit Todo</MenuItem>
                  //       <MenuItem
                  //         icon={<BsTrash />}
                  //         onClick={() => todos.removeTodo(todo.id)}
                  //       >
                  //         Delete Todo
                  //       </MenuItem>
                  //     </MenuList>
                  //   </Menu>
                  // </Flex>
                  <TodoCard
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                    completeTodo={toggleCompleteTodo}
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
