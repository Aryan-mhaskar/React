import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav>
            
      <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/">Home</NavLink>
      <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/About">About</NavLink>
      <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/Contact">Contact</NavLink>
      
      </nav>
    </div>
  )
}

export default Navbar
