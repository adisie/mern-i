
import React,{useContext} from 'react'

import { MdDelete } from "react-icons/md"

import { ProfilesContext } from '../contexts/ProfilesContext'

const Profile = ({profile}) => {
    // contexts
    const {deleteProfile} = useContext(ProfilesContext)
  return (
    <div className='image-container'>
      <img src={`http://localhost:3080/${profile.profile}`} alt="profile image" />
      <button onClick={()=>deleteProfile(profile._id)}><MdDelete /></button>
    </div>
  )
}

export default Profile
