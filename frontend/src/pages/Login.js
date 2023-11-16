
import React, {useState,useContext} from 'react'
import { Navigate } from 'react-router-dom'

import axios from 'axios'

const Login = () => {

  // states
  const [loginFormField,setLoginFormField] = useState({
    username: '',
    password: ''
  })

  // functions
  // login submit handler
  const loginSubmitHandler = async e => {
    e.preventDefault()
    
    const response = await fetch('http://localhost:3080/users/login',{
      credentials: "same-origin",
      method: 'POST',
      body: JSON.stringify(loginFormField),
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    })

    const data = await response.json()

    if(data.USER){
      localStorage.setItem('user',JSON.stringify(data.USER))
      window.location.assign('/')
    }
    if(data.errors){
      document.querySelector('.input-controll .error.username').textContent = data.errors.username 
      document.querySelector('.input-controll .error.password').textContent = data.errors.password
    }
    console.log(data.errors)
  
  }

  // username input validator
  const usernameInputValidator = e => {
    const usernameError = document.querySelector('.input-controll .error.username')
    const usernameValidator = /^[a-zA-Z]{3}/
    const username = e.target.value
    if(!username.trim()){
      usernameError.textContent = "Username required"
      e.target.classList.add('input-error')
      e.target.classList.remove('input-success')
      return false
    }else if(!usernameValidator.test(username)){
      usernameError.textContent = "Start with 3 letter"
      e.target.classList.add('input-error')
      e.target.classList.remove('input-success')
      return false
    }else {
      usernameError.textContent = ""
      e.target.classList.remove('input-error')
      e.target.classList.add('input-success')
      return true
      }
    }
  
  // password input validator
  const passwordInputValidator = e => {
    const passwordError = document.querySelector('.input-controll .error.password')
    const password = e.target.value.trim()

    if(!password) {
      passwordError.textContent = 'Password required'
      e.target.classList.add('input-error')
      e.target.classList.remove('input-success')
      return false
    }else if(password.length < 3){
      passwordError.textContent = "Too short password"
      e.target.classList.add('input-error')
      e.target.classList.remove('input-success')
      return false
    }else {
      passwordError.textContent = ''
      e.target.classList.remove('input-error')
      e.target.classList.add('input-success')
      return true
    }
  }

  // input change handler
  const inputChangeHandler = e => {
    const {name,value} = e.target
    setLoginFormField({
      ...loginFormField,
      [name]: value
    })
  }

  return (
    <div className='login-signup-form-container'>
      <form onSubmit={loginSubmitHandler}>
        <h3>Login</h3>
        <div className="input-controll">
          <input type="text" name='username' placeholder='username'
           onKeyUp={usernameInputValidator}
           value={loginFormField.username}
           onChange={inputChangeHandler}/>
          <div className="error username"></div>
        </div>
        <div className="input-controll">
          <input type="password" name='password' placeholder='password'
           onKeyUp={passwordInputValidator}
           value={loginFormField.password}
           onChange={inputChangeHandler}/>
          <div className="error password"></div>
        </div>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
