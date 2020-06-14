import React from 'react'
import {
  Switch,
  Route,
} from "react-router-dom"

import Home from './pages/Home'
import About from './pages/About'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' component={Home} />
      <Route path='/about' component={About} />
    </Switch>
  )
}

export default Routes
