import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import Navbar from './components/Navbar/Navbar.js'
import Footer from './components/Footer/Footer.js'
import SignUp from './components/SignUp/SignUp.js'
import Login from './components/Login/Login.js'
import Home from './components/HomePage/Home.js'
import 'bootstrap/dist/css/bootstrap.min.css';

const BASE_URL = "http://127.0.0.1:3001/api/v1"

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }

  componentDidMount() {
    this.loginStatus()
  }

  loginStatus = () => {
    axios.get(BASE_URL + '/logged_in')
      .then(response => {
        if (response.data.logged_in){
          this.handleLogin(response)
        } else {
          this.handleLogout()
        }
      })
      .catch(error => console.log('api erros:', error))
  };

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }

    render() {
      return (
        <Router >
          <Navbar isLoggedIn={this.state.isLoggedIn}/>
            <Switch>
              <Route exact path='/'render={props => (<Home {...props} handleLogout={this.handleLogout} isLoggedIn={this.state.isLoggedIn}/>)} />
              <Route exact path='/signup' render={ props => (<SignUp {...props} handleLogin={this.handleLogin}/>)} />
              <Route exact path='/login'  component={Login}/>
            </Switch>
          <Footer />
        </Router> 
      );
    } 
}

export default App;
