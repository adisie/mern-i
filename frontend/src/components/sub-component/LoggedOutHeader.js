import React from 'react'

import { NavLink } from 'react-router-dom'

const LoggedOutHeader = ({setIsLoggedIn}) => {

  const styleActiveLink = ({isActive}) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal'
    }
  }
  
  return (
    <nav className="navigation">
        <ul>
            <li className='btns'>
                <NavLink className='link' to='login' onClick={()=>setIsLoggedIn(true)} style={styleActiveLink}>Login</NavLink>
            </li>
            <li className='btns'>
                <NavLink className='link' to='signup' style={styleActiveLink}>Signup</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default LoggedOutHeader
