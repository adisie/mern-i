import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom'

// contexts
import { AuthContext } from '../contexts/AuthContext'

const Header = () => {
    const {setToLogin} = useContext(AuthContext)
  return (
    <header>
        <div className="sub-con header-con">
            <NavLink to='/' className='site-logo'>iShare</NavLink>
            <nav className='logged-out-nav'>
                <button onClick={()=>setToLogin(true)}>Login</button>
                <button onClick={()=>setToLogin(false)}>Signup</button>
            </nav>
        </div>
    </header>
  )
}

export default Header
