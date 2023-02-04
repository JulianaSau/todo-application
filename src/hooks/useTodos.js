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
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    },
    removeTodo: (todoId) => {
      const updatedTodos = todos.filter((todo) => todo.id !== todoId);
      setTodos(updatedTodos);
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
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    },
    clearTodos: () => {
      setTodos([]);
      localStorage.setItem("todos", JSON.stringify(todos));
    },
  };
}

export default useTodos;
