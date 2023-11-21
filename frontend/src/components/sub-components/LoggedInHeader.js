


import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

// images
import userProfile from '../../assets/images/male-profile-2.jpg'

// contexts
import { AuthContext } from '../../contexts/AuthContext'
const LoggedInHeader = () => {
  const {user,setUser} = useContext(AuthContext)

  // logout user
  const logoutUser = async () => {
    try {
      const response = await axios.get('/users/logout',{withCredentials: true})

      if(response.data.message === 'LOGGED_OUT'){
        localStorage.removeItem('user')
        window.location.assign('/login')
      }
    }catch(err){
      
      console.log(err)
    }
  }


  return (
    <ul>
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='blogs'>Blogs</NavLink>
        </li>
        <li className='conrolls-list'>
            <button onClick={logoutUser}>logout</button>
            <span>{user.username}</span>
            <img src={userProfile} alt="user-profile-image" className="user-profile" />
        </li>
    </ul>
  )
}

export default LoggedInHeader
