import { useState } from "react";

function useTodos(initialTodos) {
  const [todos, setTodos] = useState(initialTodos);
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
          id: todos.length + 1,
          text: newTodo.text,
          completed: false,
        },
        ...todos,
      ];
      orderCompletedTodos(newTodos);
      setTodos(newTodos);
    },
    updateTodo: (todoId, newValue) => {
      if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
      }

      setTodos((prev) =>
        prev.map((item) => (item.id === todoId ? newValue : item))
      );
    },
    removeTodo: (todoId) => {
      const updatedTodos = todos.filter((todo) => todo.id !== todoId);
      setTodos(updatedTodos);
    },
    toggleCompleteTodo: (todoId) => {
      const updatedTodos = todos.map((todo) => {
        return todo.id === todoId
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      });
      orderCompletedTodos(updatedTodos);
      setTodos(updatedTodos);
    },
    clearTodos: () => {
      setTodos([]);
    },
  };
}

export default useTodos;
