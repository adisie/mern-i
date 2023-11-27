

import React,{useContext} from 'react'


// contexts 
import { AuthContext } from '../contexts/AuthContext'

// pages 
import LoginSignup from './LoginSignup'
import UserProfile from './UserProfile'
import Blogs from './Blogs'

const Home = () => {
  const {user} = useContext(AuthContext)
  return (
    <div className='sub-con home-con'>
        <div className="home-container">
          <Blogs />
        </div>
        {
          user ? <UserProfile /> : <LoginSignup />
        }
    </div>
  )
}

export default Home
