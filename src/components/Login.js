import React, { Component ,useRef, useState, useEffect, useHistory} from 'react';
import { Navigate } from 'react-router-dom';
import { addMinutes } from 'date-fns';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

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
              <TextField 
                margin="normal"
                required
                fullWidth
                type="text"
                value={username} 
                onChange={handleUsernameChange} 
                placeholder='User Name'
                autoComplete="username"
                autoFocus/>
            </div>
            <div>
              <label>Password:</label>
              <TextField 
                margin="normal"
                required
                fullWidth
                type="password"
                value={password} 
                onChange={handlePasswordChange} 
                placeholder='Password'
                autoComplete="password"/>
            </div>
            <Button fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }} 
            type="submit">
              Login
            </Button>
          </form>
          </section>
          </>
      )}
    
   </>
   );
 }



