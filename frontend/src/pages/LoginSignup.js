

import React,{useContext} from 'react'

// contexts
import { AuthContext } from '../contexts/AuthContext'

// sub pages
import Login from './login-signup/Login'
import Signup from './login-signup/Signup'

const LoginSignup = () => {
    const {toLogin} = useContext(AuthContext)
  return (
    <div className='login-signup-form-container'>
      {
        toLogin ? <Login /> : <Signup />
      }
    </div>
  )
}

export default LoginSignup
