


import React,{useContext} from 'react'
import { MdDelete } from "react-icons/md"

import { ProfileContext } from '../../contexts/ProfileContext'

const ProfileViewer = ({profile}) => {
    const {deleteProfile} = useContext(ProfileContext)

    const path = `http://localhost:3080/${profile.profile}`
  return (
    <>
    <img src={path} alt="user profile" />
    <button className='delete-btn' onClick={()=>deleteProfile(profile._id)}><MdDelete /></button>
    </>
  )
}

export default ProfileViewer


