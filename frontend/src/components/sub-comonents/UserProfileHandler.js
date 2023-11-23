
import React,{useContext} from 'react'
import { FaWindowClose } from "react-icons/fa"

import defaultUserProfileImage from '../../assets/images/male-profile-2.jpg'
import { FaCamera } from "react-icons/fa"

import { ProfileContext } from '../../contexts/ProfileContext'

import ProfileViewer from './ProfileViewer'

const UserProfileHandler = ({setUserProfile}) => {
    const {profiles,addNewProfile} = useContext(ProfileContext)


    const inputChangeHandler = e => {
        const formData = new FormData()
        formData.append('profile',e.target.files[0])
        addNewProfile(formData)
    }
  return (
    <div className="user-profile-conroller">
        <div className="action-container">
            <div className="profiles">
                {
                    profiles.length 
                    ?
                    <ProfileViewer profile={profiles[0]}/>
                    :
                    <img src={defaultUserProfileImage} alt="user profile" />
                }
                
                
                <input type="file" name='profile' id='profile' hidden accept='image/*' onChange={inputChangeHandler}/>
                <label htmlFor="profile" className='pick-image-label'><FaCamera /></label>
            </div>
        </div>
        <button onClick={()=>setUserProfile(false)} className='close-btn'><FaWindowClose /></button>
    </div>
  )
}

export default UserProfileHandler
