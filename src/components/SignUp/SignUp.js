import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios'
const BASE_URL = "http://127.0.0.1:3001/api/v1"

class Signup extends Component {
  

  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: '',
      redirect: null
     };
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

handleSubmit = (event) => {
  event.preventDefault()
  const {username, email, password, password_confirmation} = this.state
  let user = {
    username: username,
    email: email,
    password: password,
    password_confirmation: password_confirmation
  }

  axios.post(BASE_URL +'/users', {user})
    .then(response => {
      if (response.data.status === 'created') {
        this.props.handleLogin(response.data)
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
};

redirect = () => {
  this.setState({redirect: "/welcome"});
};



handleErrors = () => {
  return (
    <div>
      <ul>{this.state.errors.map((error) => {
        return <li key={error}>{error}</li>
      })}
      </ul> 
    </div>
  )
}

render() {
  
  const {username, email, password, password_confirmation} = this.state

  if (this.state.redirect) {
    return <Redirect to={this.state.redirect} />
  }
  return (
      <div className='card text-center shadow'>
          <h1>Sign Up</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="username"
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            <input
              placeholder="email"
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <input 
              placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            <input
              placeholder="password confirmation"
              type="password"
              name="password_confirmation"
              value={password_confirmation}
              onChange={this.handleChange}
            />
          
            <button placeholder="submit" type="submit">
              Sign Up
            </button>
        
          </form>
          <div>
            {
              this.state.errors ? this.handleErrors() : null
            }
          </div>
        </div>
      );
  }
}
export default Signup;