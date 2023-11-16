import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom'

import profileImage from '../../assets/images/male-profile-3.jpg'

// contexts 
import { AuthContext } from '../../contexts/AuthContext'

const LoggedInHeader = () => {
    // contexts
    const {user} = useContext(AuthContext)

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
        <span>{user.username}</span>
        <img src={profileImage} alt="profile-image" className="profile-img" />
        <button onClick={()=>{
            localStorage.removeItem('user')
            window.location.assign('/login')
        }}>Logout</button>
    </nav>
  )
}

export default LoggedInHeader
