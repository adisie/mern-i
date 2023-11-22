

import React,{useState,useContext} from 'react'
import axios from 'axios'

import { AuthContext } from '../contexts/AuthContext'

const Login = () => {
    // contexts
    const {setAuhorizedUser} = useContext(AuthContext)
    // states
    const [loginFormField,setLoginFormField] = useState({
        username: '',
        password: '',
    })

    //functions
    // input change handler
    const inputChangeHandler = e => {
        const {name,value} = e.target 
        setLoginFormField({
            ...loginFormField,
            [name]: value
        })
    }


    // submit handler 
    const loginFormSubmitHandler = async e => {
        e.preventDefault()
        const usernameError = document.querySelector('.error.username')
        const passwordError = document.querySelector('.error.password')
        try {
            const response = await axios.post('/users/login',loginFormField,{withCredentials: true})
            if(response.data.user){
                setAuhorizedUser(response.data.user)
                window.location.assign('/')
            }
        }catch(err){
            usernameError.textContent = err.response.data.errors.username 
            passwordError.textContent = err.response.data.errors.password
            setAuhorizedUser(null)
        }
        
    }
  return (
    <div className="sub-container">
        <div className='login-signup-form-container'>
            <form onSubmit={loginFormSubmitHandler}>
                <h1>Login</h1>
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
    </div>
  )
}

export default Login
