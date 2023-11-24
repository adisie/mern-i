import React from 'react'

const Signup = () => {
  return (
    <div className='form-container'>
      <form>
        <h3>Signup</h3>
        <div className="input-control">
            <input type="text" name='username' placeholder='username'/>
            <div className="error username"></div>
        </div>
        <div className="input-control">
            <input type="text" name='phone' placeholder='phone' />
            <div className="error phone"></div>
        </div>
        <div className="input-control">
            <input type="password" name='password' placeholder='password' />
            <div className="error password"></div>
        </div>
        <div className="input-control">
            <input type="password" name='password2' placeholder='confirm password' />
        </div>
        <div className="input-control">
            <button>Signup</button>
        </div>
      </form>
    </div>
  )
}

export default Signup
