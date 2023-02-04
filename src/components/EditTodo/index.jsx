import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Portal,
} from "@chakra-ui/react";
import React, { useState } from "react";

const EditTodo = ({ updateTodo, todo, isOpen, onClose }) => {
  const [value, setValue] = useState("");

  function handleClick(e) {
    updateTodo(todo.id, value);
    setValue("");
    onClose();
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <Portal>
        <ModalContent>
          <ModalHeader>Edit your Todo</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Description</FormLabel>
                <Input
                  value={value}
                  onChange={(e) => setValue(e.currentTarget.value)}
                  placeholder="e.g. Going grocery shopping"
                />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleClick}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Portal>
    </Modal>
  );
};

export default EditTodo;
