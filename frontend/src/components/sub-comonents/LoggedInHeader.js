import { useContext } from "react"
import axios from "axios"
import { NavLink } from "react-router-dom"
import { FaArrowAltCircleLeft } from "react-icons/fa"
import { FaArrowAltCircleRight } from "react-icons/fa"

import defaultUserProfileImage from '../../assets/images/male-profile-2.jpg'

// contexts
import { AuthContext } from "../../contexts/AuthContext"

const LoggedInHeader = () => {
    const {user,setAuhorizedUser} = useContext(AuthContext)

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
    return ( 
        <nav className="login-nav">
            <button className="hide-nav-btn"><FaArrowAltCircleRight /></button>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='blogs'>Blogs</NavLink>
                </li>
            </ul>
            <div className="user-controller">
                <button onClick={logoutUser}>Logout</button>
                <span>{user.username}</span>
                <img src={defaultUserProfileImage} alt="user profile image" />
            </div>
            <button className="show-nav-btn"><FaArrowAltCircleLeft /></button>
        </nav>
     );
}
 
export default LoggedInHeader;