
import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { FaWindowClose } from "react-icons/fa"

import defaultUserProfileImage from '../../assets/images/male-profile-2.jpg'
import { FaCamera } from "react-icons/fa"

import ProfileViewer from './ProfileViewer'

const UserProfileHandler = ({setUserProfile}) => {
    const [profiles,setProfiles] = useState([])
    // effects
    useEffect(()=>{
        getAppProfiles()
    },[])


    // functions 
    // get all profiles 
    const getAppProfiles = async () => {
        try{
            const response = await axios.get('/users/profiles',{withCredentials: true})
            console.log(response.data.profiles)
            setProfiles([...profiles,...response.data.profiles])
        }catch(err){
            console.log(err)
        }
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
                
                
                <input type="file" name='profile' id='profile' hidden accept='image/*'/>
                <label htmlFor="profile" className='pick-image-label'><FaCamera /></label>
            </div>
        </div>
        <button onClick={()=>setUserProfile(false)} className='close-btn'><FaWindowClose /></button>
    </div>
  )
}

export default UserProfileHandler
