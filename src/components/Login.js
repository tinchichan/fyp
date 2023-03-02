import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class Login extends Component {
  state = {
    isLoggedIn: false,
    isAdmin: false,
    username: '',
    password: ''
  };

  handleUsernameChange = event => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleLogin = event => {
    event.preventDefault();
    const { username, password } = this.state;
    if (username === 'admin' && password === 'admin') {
      this.setState({ isLoggedIn: true, isAdmin: true });
    } else if (username === 'user' && password === 'user') {
      this.setState({ isLoggedIn: true, isAdmin: false });
    }
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false, isAdmin: false, username: '', password: '' });
  };

  render() {
    const { isLoggedIn, isAdmin, username } = this.state;

    if (isLoggedIn) {
      return <Navigate to="/dashboard" />;
    }

    return (
      <form onSubmit={this.handleLogin}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={this.handleUsernameChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default Login;
