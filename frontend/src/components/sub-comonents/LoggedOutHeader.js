

import React from 'react'
import { NavLink } from 'react-router-dom'

const LoggedOutHeader = () => {
  return (
    <nav className='logout-nav'>
        <ul>
            <li>
                <NavLink to='login' className='btn-link'>Login</NavLink>
            </li>
            <li>
                <NavLink to='signup' className='btn-link'>Signup</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default LoggedOutHeader
