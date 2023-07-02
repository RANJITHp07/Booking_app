import React from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navcontainer'>
      <Link to={`/`} style={{color:"inherit",textDecoration:"none"}}>
        <span className='logo'>Lamboobokking</span>
        </Link>
        <div className='navItems'>
            <button className='btn'>Login</button>
            <button className='btn' >Register</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
