


import React,{useContext, useState} from 'react'

import { FaArrowAltCircleLeft } from "react-icons/fa"
import { FaArrowAltCircleRight } from "react-icons/fa"
import { FaCamera } from "react-icons/fa"

// default images
import defaultProfileImage from '../assets/images/male-profile-2.jpg'

// sub pages
import Profile from './Profile'

// contexts
import { ProfilesContext } from '../contexts/ProfilesContext'

const Profiles = () => {
    // states
    const [currentIndex,setCurrentIndex] = useState(0)

    // contexts
    const {profiles,addNewProfile} = useContext(ProfilesContext)

    // show next image
    const showNextImage = () => {
        if(currentIndex === profiles.length -1){
            setCurrentIndex(0)
        }else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    // show previous image
    const showPrevImage = () => {
        if(currentIndex === 0){
            setCurrentIndex(profiles.length -1)
        }else{
            setCurrentIndex(currentIndex - 1)
        }
    }

    // add new profile image
    const addNewProfileImage = e => {
        const formData = new FormData()
        formData.append('profile',e.target.files[0])
        addNewProfile(formData)

    }
  return (
    <div className='sub-container'>
        {
            profiles.length === 0 
            ?
            <div className='image-container'>
                <img src={defaultProfileImage} alt="profile image" />
            </div>
        : 
        <Profile profile={profiles[currentIndex]}/>
        }
       <div className="controllers">
            <button onClick={showPrevImage}><FaArrowAltCircleLeft /></button>
            <input type="file" id='profile' name='profile' hidden accept='image/*' onChange={addNewProfileImage}/>
            <label htmlFor="profile"><FaCamera /></label>
            <button onClick={showNextImage}><FaArrowAltCircleRight /></button>
       </div>
    </div>
  )
}

export default Profiles
