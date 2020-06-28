import React, { Fragment } from 'react'
import TodoForm from '../../components/TodoForm'
import TodoList from '../../components/TodoList'

const Home = () => {
  return (
    <Fragment>
      <div className="todo-form">
        <TodoForm />
      </div>
      <div className="todos">
        <TodoList />
      </div>
    </Fragment>
  )
}

export default Home
