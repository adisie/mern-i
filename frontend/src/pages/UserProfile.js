


import React from 'react'

// icons
import { MdDelete } from "react-icons/md"
import { FaAngleDoubleLeft } from "react-icons/fa"
import { FaCamera } from "react-icons/fa"
import { FaAngleDoubleRight } from "react-icons/fa"

// default profile image
import defaultUserProfile from '../assets/images/default-profiles/male-profile-2.jpg'

const UserProfile = () => {
  return (
    <div className='user-profile-container'>
      <div className="image-container">
        <img src={defaultUserProfile} alt="profile image" />
        <button className='profile-delete-btn'><MdDelete /></button>
        <div className="controllers">
            <button><FaAngleDoubleLeft /></button>
            <input type="file" name="profile" id="profile" accept='image/*' hidden />
            <label htmlFor="profile"><FaCamera /></label>
            <button><FaAngleDoubleRight /></button>
        </div>
        <span className='username-span'>username</span>
        <button className='logout-btn'>logout</button>
      </div>
    </div>
  )
}

export default UserProfile
