

import React from 'react'
import { NavLink } from 'react-router-dom'

const LoggedOutHeader = () => {
  return (
    <ul>
        <li className='login-signup-link-container'>
            <NavLink to='login' className='user-login-signup-link'>Login</NavLink>
        </li>
        <li className='login-signup-link-container'>
            <NavLink to='signup' className='user-login-signup-link'>Signup</NavLink>
        </li>

    </ul>
  )
}

export default LoggedOutHeader
