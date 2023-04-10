import React, { Component ,useRef, useState, useEffect, useHistory} from 'react';
import { Navigate } from 'react-router-dom';
import { addMinutes } from 'date-fns';

export default function Login () {
  const [isLoggedIn , setIsLoggedIn] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')

  useEffect (() => {
    setErrMsg('')
  }, [username, password])

  const handleUsernameChange = (e) => {
    setUserName(e.target.value) 
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value );
  };

  const handleLogin =  (e) => {
    e.preventDefault();
    let hardCodedCred = [
      {
        username: 'admin',
        password: 'admin'
      },
      {
        username: 'student',
        password: 'student'
      }]
      if (username == hardCodedCred[0].username  && password == hardCodedCred[0].password) {
        setIsLoggedIn(true);
        setIsAdmin(true) 
        const token = 'admin123'
        sessionStorage.setItem('auth-token', token)
      } else if (username == hardCodedCred[1].username && password == hardCodedCred[1].password) {
        setIsLoggedIn(true);
        setIsAdmin(false) 
        const token = "student123"
        sessionStorage.setItem('auth-token',token)
      } else{
      if (username === '' && password === '') {
        setErrMsg("Missing Username or Password")
      } else if ((username !== 'admin' && password !== 'admin') || (username === 'student' && password === 'student')) 
      {
        setErrMsg('Unauthorized')
      } else {
        setErrMsg("Login Failed")
      }
    }

  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setUserName('');
    setPassword('')
  };

    return (
      <>
        {isLoggedIn ? (
          <Navigate to="/dashboard" />
        ) : (
          <>
            <p >
              {errMsg}
            </p>
          <section>
          <form onSubmit={handleLogin}>
            <div>
              <label for="username">Username:</label>
              <input 
                type="text"
                value={username} 
                onChange={handleUsernameChange} 
                placeholder='User Name'/>
            </div>
            <div>
              <label>Password:</label>
              <input 
                type="password"
                value={password} 
                onChange={handlePasswordChange} 
                placeholder='Password' />
            </div>
            <button type="submit">Login</button>
          </form>
          </section>
          </>
      )}
    
   </>
   );
 }



