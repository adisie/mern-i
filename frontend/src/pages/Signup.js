import React from 'react'

const Signup = () => {
  return (
    <div className='login-signup-form-container'>
      <form>
        <h3>Signup</h3>
        <div className="input-controll">
          <input type="text" name='username' placeholder='username' />
          <div className="error username"></div>
        </div>
        <div className="input-controll">
          <input type="text" name='email' placeholder='email' />
          <div className="error email"></div>
        </div>
        <div className="input-controll">
          <input type="password" name='password' placeholder='password' />
          <div className="error password"></div>
        </div>
        <div className="input-controll">
          <input type="password" name='password2' placeholder='confirm password' />
          <div className="error password2"></div>
        </div>
        <button>Signup</button>
      </form>
    </div>
  )
}

export default Signup
