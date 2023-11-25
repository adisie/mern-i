


import React,{useContext,useEffect,useState} from 'react'

// icons
import { MdDelete } from "react-icons/md"
import { FaCamera } from "react-icons/fa"
import { FaCaretLeft } from "react-icons/fa"
import { FaCaretRight } from "react-icons/fa"

// contexts
import { AuthContext } from '../contexts/AuthContext'
import { UserProfileContext } from '../contexts/UserProfileContext'

// default profile image
import defaultUserProfile from '../assets/images/default-profiles/male-profile-2.jpg'

const UserProfile = () => {
  // states
  const [currentIndex,setCurrentIndex] = useState(0)

  // contexts
  const {profiles,
    setProfiles,
    getAllUserProfiles,
    addNewProfileImage,
    deleteProfileImage,
  } = useContext(UserProfileContext)
  const {logoutUser,user} = useContext(AuthContext)

  // effects
  useEffect(()=> {
    getAllUserProfiles()
  },[])

   // show neext image
   const showNextProfileImage = () => {
    if(currentIndex === profiles.length - 1){
      setCurrentIndex(0)
    }else{
      setCurrentIndex(currentIndex + 1)
    }
  }

  // show previos image
  const showPrevProfileImage = () => {
    if(currentIndex === 0){
      setCurrentIndex(profiles.length - 1)
    }else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  // profile input change handler
  const inputChangeHandler = e => {
    const formData = new FormData()
    formData.append('profile',e.target.files[0])
    addNewProfileImage(formData)
  }


  return (
    <div className='user-profile-container'>
      <div className="image-container">
        {
          profiles.length 
          ?
          <>
          <img src={`http://localhost:3080/${profiles[currentIndex].profile}`} alt="logged in user profile" />
          <button className='profile-delete-btn' onClick={()=>{
            deleteProfileImage(profiles[currentIndex]._id)
          }} ><MdDelete /></button>
          <div className="controllers">
              <button onClick={showPrevProfileImage}><FaCaretLeft /></button>
              <input type="file" name="profile" id="profile" accept='image/*' hidden onChange={inputChangeHandler}/>
              <label htmlFor="profile" ><FaCamera /></label>
              <button onClick={showNextProfileImage}><FaCaretRight /></button>
          </div>
          </>
          :
          <>
          <img src={defaultUserProfile} alt="logged in user profile" />
          <div className="controllers">
              <input type="file" name="profile" id="profile" accept='image/*' hidden onChange={inputChangeHandler}/>
              <label htmlFor="profile"><FaCamera /></label>
          </div>
          </>
        }
        <span className='username-span'>{user.username} | {user.phone}</span>
        <button className='logout-btn' onClick={()=>{
          logoutUser()
          setProfiles([])
        }}>logout</button>
      </div>
    </div>
  )
}

export default UserProfile
