import React, { useState } from "react";

export const generateRandomString = length => {
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

const useTodoUtils = () => {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		if (!todo.text || /^\s*$/.test(todo.text)) {
			return;
		}

		const newTodos = [{...todo, id:generateRandomString(10), isCompleted:false}, ...todos];

		setTodos(newTodos);
		console.log(...todos);
	};

	const updateTodo = (todoId, newValue) => {
		if (!newValue.text || /^\s*$/.test(newValue.text)) {
			return;
		}

		setTodos((prev) =>
			prev.map((item) => (item.id === todoId ? newValue : item))
		);
	};

	const removeTodo = (id) => {
		const removedArr = [...todos].filter((todo) => todo.id !== id);

		setTodos(removedArr);
	};

	const orderStarAndComplete = (todos) => {
		// todos.sort((x, y) => y.starred - x.starred);
		todos.sort((x, y) => x.isCompleted - y.isCompleted);
	  };

	const completeTodo = (id) => {
		let updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				return {
					...todo,
					isCompleted : !todo.isCompleted
				  }
				
			}
			return todo;
		});
		// orderStarAndComplete(updatedTodos);
		setTodos(updatedTodos);
	};
	const clearTodos = () => {
		setTodos([])
	}
	return {
		todos,
		addTodo,
		removeTodo,
		updateTodo,
		completeTodo,
		clearTodos
	};
};

export default useTodoUtils;
