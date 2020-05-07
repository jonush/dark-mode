import React, { useState } from "react";

const Login = props => {
  const [ user, setUser ] = useState({
    username: '',
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
      password: '',
    })
  }

  return (
    <div>
      <form className='login' onSubmit={handleSubmit}>
        <h2 className='form-title'>Log In</h2>
        <input
          type='text'
          placeholder='Username'
          name='username'
          value={user.username}
          onChange={handleInput}
        />

        <input
          type='password'
          placeholder='Password'
          name='password'
          value={user.password}
          onChange={handleInput}
        />

        <button onSubmit={handleSubmit}>Log In</button>
      </form>
    </div>
  )
}

export default Login;