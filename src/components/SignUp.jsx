import React, { useState } from "react";

const SignUp = props => {
  const [ user, setUser ] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleInput = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    setUser({
      username: '',
      email: '',
      password: '',
    })
  }

  return (
    <div>
      <form className='signup' onSubmit={handleSubmit}>
        <h2 className='form-title'>Sign Up</h2>
        <input
          type='text'
          placeholder='Username'
          name='username'
          value={user.username}
          onChange={handleInput}
        />
        
        <input
          type='text'
          placeholder='Email'
          name='email'
          value={user.email}
          onChange={handleInput}
        />

        <input
          type='password'
          placeholder='Password'
          name='password'
          value={user.password}
          onChange={handleInput}
        />

        <button onSubmit={handleSubmit}>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp;