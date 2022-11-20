import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'


const Header =()=>{
  return (
   
    
   <>
      <header>
    {/* <a href='#'>LOgo</a> */}
   
    <div className="h1">
   
    <h1 className="navhead">Logo</h1>
    </div>
    
    <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
            
        </ul>
    </nav>
   </header>

  
   </>
  )
}

export default Header
