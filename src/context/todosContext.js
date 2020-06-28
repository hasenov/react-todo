import React, { createContext, useState, useEffect } from 'react';
import { randomId } from '../utils/randomId'

export const TodosContext = createContext();

const TodosContextProvider = ({ children }) => {

  const initialState = JSON.parse(localStorage.getItem('todos')) || [];

  const [ todos, setTodos ] = useState(initialState);

  const [ current, setCurrent ] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    setTodos([{ title, id: randomId(), done: false }, ...todos ]);
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id ));
  }

  const setCurrentValue = (id) => {
    const current = todos.find(todo => todo.id === id);
    setCurrent(current);
  }

  const editTodo = ( title, id ) => {
    const newTodos = todos.map(todo => (todo.id === id ? {title, id} : todo));
    setTodos(newTodos);
    setCurrent(null);
  }

  const setDone = ({ title, id, done }) => {
    const newTodos = todos.map(todo => (todo.id === id ? {title, id, done: !done} : todo));
    setTodos(newTodos);
  }

  return (
    <TodosContext.Provider value={{ todos, current, addTodo, deleteTodo, setCurrentValue, editTodo, setDone }}>
      {children}
    </TodosContext.Provider>
  );

}

export default TodosContextProvider;