import React from 'react'
import { NavLink } from 'react-router-dom'

import profileImage from '../../assets/images/male-profile-3.jpg'

const LoggedInHeader = ({setIsLoggedIn}) => {
    const styleActiveLink = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal'
        }
    }
  return (
    <nav className="navigation">
        <ul>
            <li>
                <NavLink className='link' to='/' style={styleActiveLink}>Home</NavLink>
            </li>
            <li>
                <NavLink className='link' to='blogs' style={styleActiveLink}>Blogs</NavLink>
            </li>
        </ul>
        <img src={profileImage} alt="profile-image" className="profile-img" />
        <button onClick={()=>setIsLoggedIn(false)}>Logout</button>
    </nav>
  )
}

export default LoggedInHeader
