


import React from 'react'

const Login = () => {
  return (
    <div className='form-container'>
      <form>
        <h3>Login</h3>
        <div className="input-control">
            <input type="text" name='username' placeholder='username'/>
            <div className="error username"></div>
        </div>
        <div className="input-control">
            <input type="password" name='password' placeholder='password' />
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
