import React, { useContext } from 'react'
import { TodosContext } from '../context/todosContext'
import TodoItem from './TodoItem'

const TodoList = () => {

  const todosContext = useContext(TodosContext);

  const { todos } = todosContext;
  
  return (
    <ul className="todo-list">
      {todos.map(todo => {
        return (
          <TodoItem todo={todo} key={todo.id} />
        )
      })}
    </ul>
  )
}

export default TodoList
