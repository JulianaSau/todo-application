import { useToast } from "@chakra-ui/react";
import { useState } from "react";

function useTodos(initialTodos) {
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : initialTodos
  );
  
  const orderCompletedTodos = (todos) => {
    todos.sort((x, y) => x.isCompleted - y.isCompleted);
  };

  const generateRandomString = (length) => {
    var text = window.sessionStorage.getItem("random_string");
    if (!text) {
      text = "";
      var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
    }
    return text;
  };

  const toast = useToast();
  const [isShowingToast, setIsShowingToast] = useState(false);

  const showToast = (title) => {
    setIsShowingToast(true);
    toast({
      title: "Success",
      description: `${title}`,
      status: "success",
      duration: 1000,
      isClosable: true
    });
  };

  return {
    todos,
    addTodo: (newTodo) => {
      if (!newTodo.text || /^\s*$/.test(newTodo.text)) {
        return;
      }
      const newTodos = [
        {
          id: generateRandomString(20),
          text: newTodo.text,
          completed: false,
        },
        ...todos,
      ];
      orderCompletedTodos(newTodos);
      setTodos(newTodos);
      showToast("Added todo successfully")
      localStorage.setItem("todos", JSON.stringify(newTodos));
    },
    updateTodo: (todoId, newValue) => {
      if (!newValue || /^\s*$/.test(newValue)) {
        return;
      }

      const updatedTodos = todos.map((todo) => {
        return todo.id === todoId ? { ...todo, text: newValue } : todo;
      });

      setTodos(updatedTodos);
      showToast("Updated todo successfully")
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    },
    removeTodo: (todoId) => {
      const updatedTodos = todos.filter((todo) => todo.id !== todoId);
      setTodos(updatedTodos);
      showToast("Removed todo successfully")
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    },
    toggleCompleteTodo: (todoId) => {
      const updatedTodos = todos.map((todo) => {
        return todo.id === todoId
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      });
      orderCompletedTodos(updatedTodos);
      setTodos(updatedTodos);
      showToast("Updated todo successfully")
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    },
    clearTodos: () => {
      setTodos([]);
      showToast("Cleared todos successfully")
      localStorage.setItem("todos", JSON.stringify(todos));
    },
  };
}

export default useTodos;
