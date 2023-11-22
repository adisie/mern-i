

import React,{useState,useContext} from 'react'
import axios from 'axios'

import { AuthContext } from '../contexts/AuthContext'

const Signup = () => {
  // contexts
  const {setAuhorizedUser} = useContext(AuthContext)
  // states
  const [signupFormField,setSignupFormField] = useState({
    username: '',
    phone: '',
    password: ''
  })

  // functions
  // input change handler
  const inputChangeHandler = e => {
    const {name,value} = e.target 
    setSignupFormField({
      ...signupFormField,
      [name]: value
    })
  }

  // signup submit handler
  const signupFormHandler = async e => {
    e.preventDefault()
    const usernameError = document.querySelector('.error.username')
    const phoneError = document.querySelector('.error.phone')
    const passwordError = document.querySelector('.error.password')
    const password2Error = document.querySelector('.error.password2')

    if(e.target.password.value.trim() !== e.target.password2.value.trim()){
      password2Error.textContent = 'please confirm password'
    }else {
      password2Error.textContent = ''
      try {
        const response = await axios.post('/users/signup',signupFormField,{withCredentials: true})
        if(response.data.user){
          setAuhorizedUser(response.data.user)
          window.location.assign('/')
        }
      }catch(err){
        usernameError.textContent = err.response.data.errors.username 
        phoneError.textContent = err.response.data.errors.phone 
        passwordError.textContent = err.response.data.errors.password 
        setAuhorizedUser(null)
      }
    }
  }
  return (
    <div className="sub-container">
      <div className='login-signup-form-container'>
        <form onSubmit={signupFormHandler}>
          <h1>Signup</h1>
          <div className="input-control">
              <input type="text" name='username' placeholder='username' required
              value={signupFormField.username}
              onChange={inputChangeHandler}/>
              <div className="error username"></div>
          </div>
          <div className="input-control">
              <input type="text" name='phone' placeholder='phone' required
              value={signupFormField.phone}
              onChange={inputChangeHandler}/>
              <div className="error phone"></div>
          </div>
          <div className="input-control">
              <input type="password" name='password' placeholder='password' required
              value={signupFormField.password}
              onChange={inputChangeHandler}/>
              <div className="error password"></div>
          </div>
          <div className="input-control">
              <input type="password" name='password2' placeholder='confirm password' required/>
              <div className="error password2"></div>
          </div>
          <div className="input-control">
              <button>Signup</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
