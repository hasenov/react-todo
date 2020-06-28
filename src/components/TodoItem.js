import React, { useContext } from 'react'
import { TodosContext } from '../context/todosContext'

const TodoItem = ({ todo }) => {

  const todosContext = useContext(TodosContext);

  const { setCurrentValue, deleteTodo, setDone } = todosContext;

  const { title, id, done } = todo;

  const onEdit = () => {
    setCurrentValue(id);
  }

  const onDelete = () => {
    deleteTodo(id);
  }

  const onDone = () => {
    setDone(todo);
  }

  return (
    <li className={`todo-list__item ${done ? 'done' : ''}`}>
      <span>{title}</span>
      <div className="todo-list__buttons">
        <button className="icon icon--dark" onClick={onEdit}>
          <ion-icon name="pencil-outline"></ion-icon>
        </button>
        <button className="icon icon--success icon-done" onClick={onDone}>
          <ion-icon name="checkmark-outline"></ion-icon>
        </button>
        <button className="icon icon--danger" onClick={onDelete}>
          <ion-icon name="trash-outline"></ion-icon>
        </button>
      </div>
    </li>
  )
}

export default TodoItem
