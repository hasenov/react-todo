import React, { useState, useContext, useEffect } from 'react'
import { TodosContext } from '../context/todosContext'

const TodoForm = () => {

  const todosContext = useContext(TodosContext);
  const { addTodo, editTodo, current } = todosContext;

  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!title) return;

    if(current) {
      editTodo(title, current.id);
      setTitle('');
      return;
    }
    addTodo(title);

    setTitle('');
  }

  useEffect(() => {
    if(!current) return;

    setTitle(current.title);

  }, [current]);
  
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__group">
        <input type="text" placeholder="What needs to be done?" className="form__control" required value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="submit" value={current ? 'Edit Todo' : 'Add todo'} className="btn"/>
      </div>
    </form>
  )
}

export default TodoForm
