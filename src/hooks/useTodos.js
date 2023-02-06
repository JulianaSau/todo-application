import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function useTodos(initialTodos) {
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : initialTodos
  );

  const toast = useToast();
  const [isShowingToast, setIsShowingToast] = useState(false);

  const showToast = (title) => {
    setIsShowingToast(true);
    toast({
      title: "Success",
      description: `${title}`,
      position: "bottom-right",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };

  const orderCompletedTodos = (todos) => {
    todos.sort((x, y) => x.isCompleted - y.isCompleted);
  };

  const initialTodoArrange = (todoId) => {
    let to = todos.length + 1;
    let from = 0;

    const updatedTodos = todos.map((todo, index) => {
      if (todo.id === todoId) {
        todo.isCompleted = !todo.isCompleted;
        from = index;
      }
      return todo;
    });

    // move completed item to bottom of list
    updatedTodos.splice(to, 0, updatedTodos.splice(from, 1)[0]);
    setTodos(updatedTodos);
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

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
    },
    updateTodo: (todoId, newValue) => {
      if (!newValue || /^\s*$/.test(newValue)) {
        return;
      }

      const updatedTodos = todos.map((todo) => {
        return todo.id === todoId ? { ...todo, text: newValue } : todo;
      });

      setTodos(updatedTodos);
      showToast("Updated todo successfully");
    },
    removeTodo: (todoId) => {
      const updatedTodos = todos.filter((todo) => todo.id !== todoId);
      setTodos(updatedTodos);
      showToast("Removed todo successfully");
    },
    toggleCompleteTodo: (todoId) => {
      if ([...todos.filter((todo) => todo.isCompleted === true)].length === 0) {
        initialTodoArrange(todoId);
      } else {
        const updatedTodos = todos.map((todo) => {
          return todo.id === todoId
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo;
        });
        orderCompletedTodos(updatedTodos);
        setTodos(updatedTodos);
      }
    },
    clearTodos: () => {
      setTodos([]);
      showToast("Cleared todos successfully");
    },
  };
}

export default useTodos;
