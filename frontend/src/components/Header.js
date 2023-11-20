

import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom'

// impages
import siteLogo from '../assets/images/dark_red_eagle_1.png'


// sub header components
import LoggedInHeader from './sub-components/LoggedInHeader'
import LoggedOutHeader from './sub-components/LoggedOutHeader'

// import contexts
import { AuthContext } from '../contexts/AuthContext'

const Header = () => {
    const {user} = useContext(AuthContext)
  return (
    <header>
        <div className="logo-container">
            <NavLink>
                <img src={siteLogo} alt="site-logo" className='site-logo' />
            </NavLink>
        </div>
        <nav className="navigation">
            {
                user 
                ?
                <LoggedInHeader />
                :
                <LoggedOutHeader />
            }
        </nav>
    </header>
  )
}

export default Header
