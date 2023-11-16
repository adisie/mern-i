
import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'

// components
import LoggedInHeader from './sub-component/LoggedInHeader'
import LoggedOutHeader from './sub-component/LoggedOutHeader'

// contexts
import { AuthContext } from '../contexts/AuthContext'

const Header = () => {
  const {user} = useContext(AuthContext)
  return (
    <header>
      <NavLink className="site-title" to='/'>blogs</NavLink>
      {
        user 
        ?
        <LoggedInHeader />
        :
        <LoggedOutHeader />
      }
    </header>
  )
}

export default Header
