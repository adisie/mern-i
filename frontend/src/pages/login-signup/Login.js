


import React,{useState,useContext} from 'react'

// contexts
import { AuthContext } from '../../contexts/AuthContext'

const Login = () => {
  // contexts
  const {loginUser} = useContext(AuthContext)
  // states
  const [loginFormField,setLoginFormField] = useState({
    username: '',
    password: '',
  })


  // input chnage handler
  const inputChangeHandler = e => {
    const {name,value} = e.target 
    setLoginFormField({
      ...loginFormField,
      [name]: value
    })
  }

  // submit login form
  const submitLoginFormHandler =async e => {
    e.preventDefault()
    const usernameError = document.querySelector('.error.username')
    const passwordError = document.querySelector('.error.password')

    const result = await loginUser(loginFormField)
    if(result !== 'LOGED-IN'){
      usernameError.textContent = result.username 
      passwordError.textContent = result.password
    }else {
      passwordError.textContent = ''
      passwordError.textContent = ''
    }
  }


  return (
    <div className='form-container'>
      <form onSubmit={submitLoginFormHandler}>
        <h3>Login</h3>
        <div className="input-control">
            <input type="text" name='username' placeholder='username' required
            value={loginFormField.username}
            onChange={inputChangeHandler}/>
            <div className="error username"></div>
        </div>
        <div className="input-control">
            <input type="password" name='password' placeholder='password' required 
            value={loginFormField.password}
            onChange={inputChangeHandler}/>
            <div className="error password"></div>
        </div>
        <div className="input-control">
            <button>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
