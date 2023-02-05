import {
  Button,
  FormControl,
  FormHelperText,
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
  const [error, setError] = useState("");

  // function to detect enter key for editing
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleClick(e)
    }
  }

  function handleClick(e) {
      if(value === "") {
        setError("Please enter the new decription. Cannot submit empty field")
        return
      }

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
              onClick={()=>setError("")}
              isInvalid={error !== ""}
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
                placeholder="e.g. Going grocery shopping"
                onKeyDown={handleKeyDown}
                
              />
              {error != "" &&<FormHelperText color="red.200">{error}</FormHelperText>}
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
