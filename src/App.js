import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import TodosContextProvider from './context/todosContext'
import Routes from './routes'
import Navbar from './components/Navbar'
import './assets/css/bootstrap-reboot.min.css'
import './App.sass'

function App() {
  return (
    <TodosContextProvider>
      <Router>
        <Navbar />
        <div className="container">
          <Routes />
        </div>
      </Router>
    </TodosContextProvider>
  );
}

export default App;
