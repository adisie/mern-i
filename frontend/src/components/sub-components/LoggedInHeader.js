


import React from 'react'
import { NavLink } from 'react-router-dom'

// images
import userProfile from '../../assets/images/tewodiros1.jpg'

const LoggedInHeader = () => {
  return (
    <ul>
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='blogs'>Blogs</NavLink>
        </li>
        <li className='conrolls-list'>
            <button>logout</button>
            <span>username</span>
            <img src={userProfile} alt="user-profile-image" className="user-profile" />
        </li>
    </ul>
  )
}

export default LoggedInHeader
