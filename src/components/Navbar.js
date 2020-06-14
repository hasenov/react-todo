import React from 'react'
import {
  Link,
  NavLink
} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <nav className="navbar__nav">
          <Link to='/' className="navbar__logo">Todo App</Link>
          <ul className="navbar__list">
            <li><NavLink to='/' exact>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
