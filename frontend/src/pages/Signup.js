
import React,{useState,useContext} from 'react'
import axios from 'axios'

import { AuthContext } from '../contexts/AuthContext'

const Signup = () => {
  // contexts
  const {setUser} = useContext(AuthContext)

  // states
  const [signupFormField,setSignupFormField] = useState({
    username: '',
    email: '',
    password: '',
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
  const singupUser = async e => {
    e.preventDefault()
    // get error displayers
    const usernameError = document.querySelector('.error.username')
    const emailError = document.querySelector('.error.email')
    const passwordError = document.querySelector('.error.password')
    const password2Error = document.querySelector('.error.password2')

    const isEmail = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?/

    if(e.target.username.value.trim() === ''){
      usernameError.textContent = 'Username required'
    }else if(e.target.email.value.trim() === ''){
      usernameError.textContent = ''
      emailError.textContent = 'Email address required'
    }else if(!isEmail.test(e.target.email.value.trim())){
      emailError.textContent = 'Invalid email address'
    }else if(e.target.password.value === ''){
      emailError.textContent = ''
      passwordError.textContent = 'Password required'
    }else if(e.target.password.value.trim() !== e.target.password2.value.trim()){
      passwordError.textContent = ''
      password2Error.textContent = 'Please confirm password'
    }else {
      try {
        const response = await axios.post('/users/signup',signupFormField,{withCredentials: true})
        if(response.data.user){
          setUser(response.data.user)
          localStorage.setItem('user',JSON.stringify(response.data.user))
          window.location.assign('/')

          usernameError.textContent = ''
          emailError.textContent = ''
          passwordError.textContent = ''
          password2Error.textContent = ''
        }
        if(response.data.errors){
          usernameError.textContent = response.data.errors.username 
          emailError.textContent = response.data.errors.email 
          passwordError.textContent = response.data.errors.password
        }
        
      }catch(err){
        console.log(err)
      }
      // console.log(signupFormField)
      //clear errors text content
      // usernameError.textContent = ''
      // emailError.textContent = ''
      // passwordError.textContent = ''
      // password2Error.textContent = ''

    }
  }
  return (
    <div className='login-signup-form-container'>
      <form onSubmit={singupUser}>
        <h3>Signup</h3>
        <div className="input-controll">
          <input type="text" name="username" placeholder='username'
           value={signupFormField.username}
           onChange={inputChangeHandler}/>
          <div className="error username"></div>
        </div>
        <div className="input-controll">
          <input type="text" name="email" placeholder='email'
          value={signupFormField.email}
          onChange={inputChangeHandler}/>
          <div className="error email"></div>
        </div>
        <div className="input-controll">
          <input type="password" name="password" placeholder='password'
          value={signupFormField.password}
          onChange={inputChangeHandler}/>
          <div className="error password"></div>
        </div>
        <div className="input-controll">
          <input type="password" name="password2" placeholder='confirm password'/>
          <div className="error password2"></div>
        </div>
        <button>Signup</button>
      </form>
    </div>
  )
}

export default Signup
