
import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

// components
import LoggedInHeader from './sub-component/LoggedInHeader'
import LoggedOutHeader from './sub-component/LoggedOutHeader'

const Header = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  return (
    <header>
      <NavLink className="site-title" to='/'>blogs</NavLink>
      {
        isLoggedIn 
        ?
        <LoggedInHeader setIsLoggedIn={setIsLoggedIn}/>
        :
        <LoggedOutHeader setIsLoggedIn={setIsLoggedIn}/>
      }
    </header>
  )
}

export default Header
