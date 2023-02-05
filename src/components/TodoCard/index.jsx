import React from "react";
import {
  Flex,
  Box,
  Icon,
  useColorModeValue,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  Portal,
  useDisclosure,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { BsThreeDotsVertical, BsTrash } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import EditTodo from "../EditTodo";

const TodoCard = ({ todo, removeTodo, completeTodo, updateTodo }) => {
  const borderColor = useColorModeValue("gray.400", "gray.300");
  const completedColor = todo.isCompleted ? "blue.500" : "gray.200"
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
    <Flex
      mt={4}
      onClick={(e) => {
        e.stopPropagation();
        completeTodo(todo.id);
      }}
      borderWidth={todo.isCompleted ? "1px" : "0px"}
      borderColor={todo.isCompleted ? "blue.400" : "transparent"}
      cursor={"pointer"}
      minW={{ base: "90vw", md: "420px" }}
      w={{ base: "80vw", md: "full" }}
      bg="white"
      _dark={{
        bg: "gray.700",
      }}
      shadow="md"
      px="5"
      rounded="lg"
      overflow="hidden"
      alignItems={"center"}
      justify="space-between"
    >
      <Flex alignItems={"center"} justify="space-between">
        {todo.isCompleted ? (
          <Icon as={FaCheckCircle} color="blue.400" />
        ) : (
          <Flex
            justify={"center"}
            align="center"
            h="15px"
            w="15px"
            bg="white"
            borderRadius="15px"
            borderWidth={"2px"}
            borderColor={borderColor}
          />
        )}
        <Flex alignItems="top" px={2} py={5}>
          <Box mx={3} textAlign="left">
            <Box
              w="100%"
              noOfLines={3}
              color={todo.isCompleted ? "blue.500" : "gray.500"}
              _dark={{
                color: completedColor,
              }}
              textDecoration={todo.isCompleted ? "line-through" : "none"}
            >
              {todo.text}
            </Box>
          </Box>
        </Flex>
      </Flex>
      <Menu>
        <MenuButton
        onClick={(e)=>{e.stopPropagation()}}
          as={IconButton}
          aria-label="Options"
          icon={<BsThreeDotsVertical />}
          variant="ghost"
        />
        <Portal>
          <MenuList>
            <MenuItem icon={<EditIcon />} onClick={(e)=>{e.stopPropagation();onOpen()}}>Edit Todo</MenuItem>
            <MenuItem
              icon={<BsTrash />}
              onClick={(e) => {
                e.stopPropagation();
                removeTodo(todo.id);
              }}
            >
              Delete Todo
            </MenuItem>
          </MenuList>
        </Portal>
      </Menu>
    </Flex>
    <EditTodo isOpen={isOpen} onClose={onClose} updateTodo={updateTodo} todo={todo}/>
    </>
  );
};

export default TodoCard;
