import { useContext, useState } from "react"
import axios from "axios"
import { NavLink } from "react-router-dom"
import { FaArrowAltCircleLeft } from "react-icons/fa"
import { FaArrowAltCircleRight } from "react-icons/fa"

import defaultUserProfileImage from '../../assets/images/male-profile-2.jpg'

// contexts
import { AuthContext } from "../../contexts/AuthContext"

import UserProfileHandler from "./UserProfileHandler"

const LoggedInHeader = () => {
    const {user,setAuhorizedUser} = useContext(AuthContext)

    const [isHide,setIsHide] = useState(true)
    const [userProfile,setUserProfile] = useState(false)

    // logout user
    const logoutUser = async () => {
        try {
            const response = await axios.get('/users/logout',{withCredentials: true})
            if(response.data.message === 'LOGOUT'){
                setAuhorizedUser(null)
                localStorage.removeItem('user')
                window.location.assign('/login')
            }
            
        }catch(err){
            console.log(err)
        }
    }

    const showHideNavBar = () => {
        const navBar = document.querySelector('.login-nav')

        if(navBar.style.right === '-1000px'){
            navBar.style.right = "0"
            setIsHide(false)
        }else {
            navBar.style.right = "-1000px"
            setIsHide(true)
        }

    }

    const userProfileViwer = () => {
        setUserProfile(!userProfile)
    }

    return ( 
        <nav className="login-nav">
            <ul>
                <li>
                    <NavLink to='/' onClick={showHideNavBar}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='blogs' onClick={showHideNavBar}>Blogs</NavLink>
                </li>
            </ul>
            <div className="user-controller">
                <button onClick={logoutUser}>Logout</button>
                <span>{user.username}</span>
                <img src={defaultUserProfileImage} alt="user profile image" onClick={userProfileViwer}/>
            </div>
            <button className="show-nav-btn" onClick={showHideNavBar}>
            {
                isHide 
                ?
                <FaArrowAltCircleLeft />
                : 
                <FaArrowAltCircleRight />
            }
            </button>
            {
                userProfile 
                ?
                <UserProfileHandler setUserProfile={setUserProfile}/>
                :
                <></>
            }
        </nav>
     );
}
 
export default LoggedInHeader;