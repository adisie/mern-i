


import React,{useContext} from 'react'

// icons
import { MdDelete } from "react-icons/md"
import { FaCamera } from "react-icons/fa"
import { FaCaretLeft } from "react-icons/fa"
import { FaCaretRight } from "react-icons/fa"

// contexts
import { AuthContext } from '../contexts/AuthContext'

// default profile image
import defaultUserProfile from '../assets/images/default-profiles/male-profile-2.jpg'

const UserProfile = () => {
  const {logoutUser,user} = useContext(AuthContext)
  return (
    <div className='user-profile-container'>
      <div className="image-container">
        <img src={defaultUserProfile} alt="profile image" />
        <button className='profile-delete-btn'><MdDelete /></button>
        <div className="controllers">
            <button><FaCaretLeft /></button>
            <input type="file" name="profile" id="profile" accept='image/*' hidden />
            <label htmlFor="profile"><FaCamera /></label>
            <button><FaCaretRight /></button>
        </div>
        <span className='username-span'>{user.username} | {user.phone}</span>
        <button className='logout-btn' onClick={logoutUser}>logout</button>
      </div>
    </div>
  )
}

export default UserProfile
