import React from "react";
import {
  Flex,
  chakra,
  Box,
  Icon,
  useColorModeValue,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  Portal,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { BsThreeDotsVertical, BsTrash } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";

const TodoCard = ({ todo, removeTodo, completeTodo }) => {
  const borderColor = useColorModeValue("gray.400", "gray.300");

  return (
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
      w={{ base: "90vw", md: "420px" }}
      mx="auto"
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
            borderWidth={"1px"}
            borderColor={borderColor}
          />
        )}
        <Flex alignItems="top" px={2} py={5}>
          <Box mx={3} textAlign="left">
            <chakra.p
              w="100%"
              noOfLines={3}
              color="gray.500"
              _dark={{
                color: "gray.200",
              }}
              textDecoration={todo.isCompleted ? "line-through" : "none"}
            >
              {todo.text}
            </chakra.p>
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
            <MenuItem icon={<EditIcon />} onClick={(e)=>{e.stopPropagation()}}>Edit Todo</MenuItem>
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
  );
};

export default TodoCard;
