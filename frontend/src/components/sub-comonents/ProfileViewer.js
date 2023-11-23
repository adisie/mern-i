


import React from 'react'
import { MdDelete } from "react-icons/md"

const ProfileViewer = ({profile}) => {
    console.log(profile.profile)
    const path = `http://localhost:3080/${profile.profile}`
  return (
    <>
    <img src={path} alt="user profile" />
    <button className='delete-btn'><MdDelete /></button>
    </>
  )
}

export default ProfileViewer


