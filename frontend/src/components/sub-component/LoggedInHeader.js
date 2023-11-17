import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

import profileImage from '../../assets/images/male-profile-3.jpg'

// contexts 
import { AuthContext } from '../../contexts/AuthContext'

const LoggedInHeader = () => {
    // contexts
    const {user,setUser} = useContext(AuthContext)

    const styleActiveLink = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal'
        }
    }

    // functions
    // logout user
    const logoutUser = () => {
        axios.get('/users/logout',{withCredentials: true})
          .then(response=>{
            if(response.data.message === 'LOGGED_OUT'){
                setUser(null)
                localStorage.removeItem('user')
            }
          })
          .catch(err=>{
            setUser(null)
            localStorage.removeItem('user')
          })
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
            logoutUser()
        }}>Logout</button>
    </nav>
  )
}

export default LoggedInHeader
