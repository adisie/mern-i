

import React,{useState,useContext} from 'react'
import axios from 'axios'

import { AuthContext } from '../contexts/AuthContext'

const Login = () => {
  const {setUser} = useContext(AuthContext)
  // states
  const [loginFormField,setLoginFormField] = useState({
    username: '',
    password: ''
  })


  // functions
  // input field change handler
  const inputFieldChangeHandler = e => {
    const {name,value} = e.target 
    setLoginFormField({
      ...loginFormField,
      [name]: value
    })
  }

  // login submit handler
  const loginSubmitHandler = async e => {
    e.preventDefault()
    const usernameError = document.querySelector('.error.username')
    const passwordError = document.querySelector('.error.password')
    try{
      const response = await axios.post('/users/login',loginFormField,{withCredentials: true})
      setUser(response.data.user)
      localStorage.setItem('user',JSON.stringify(response.data.user))
      window.location.assign('/')
      setLoginFormField({
        username: '',
        password: ''
      })
      usernameError.textContent = ''
      passwordError.textContent = ''
    }catch(err){
      usernameError.textContent = err.response.data.username 
      passwordError.textContent = err.response.data.password
    }
  }
  return (
    <div className='login-signup-form-container'>
      <form onSubmit={loginSubmitHandler}>
        <h3>Login</h3>
        <div className="input-controll">
          <input type="text" name="username" placeholder='username' required
           value={loginFormField.username}
           onChange={inputFieldChangeHandler}/>
          <div className="error username"></div>
        </div>
        <div className="input-controll">
          <input type="password" name="password" placeholder='password' required
           value={loginFormField.password} 
           onChange={inputFieldChangeHandler}/>
          <div className="error password"></div>
        </div>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
