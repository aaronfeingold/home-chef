import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { handleSignUp } from '../../actions/usersActions.js'

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

  this.props.handleSignUp(user)
  this.redirect();
};

redirect = () => {
  this.props.history.push('/')
}

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
    <div className="container">
      <div className="container-fluid" >
          <h1>Sign Up</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  placeholder="username"
                  type="text"
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="email"
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input 
                  placeholder="password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="confirm password"
                  type="password"
                  name="password_confirmation"
                  value={password_confirmation}
                  onChange={this.handleChange}
                />
              </div>
            
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
      </div>
      );
  }
}


export default connect(null, { handleSignUp })(Signup);