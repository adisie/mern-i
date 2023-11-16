import React from 'react'

import { NavLink } from 'react-router-dom'

const LoggedOutHeader = () => {
  
  return (
    <nav className="navigation">
        <ul>
            <li className='btns'>
                <NavLink className='link' to='login'>Login</NavLink>
            </li>
            <li className='btns'>
                <NavLink className='link' to='signup'>Signup</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default LoggedOutHeader
