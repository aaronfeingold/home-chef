import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import Navbar from './components/Navbar/Navbar.js'
import Footer from './components/Footer/Footer.js'
import SignUp from './components/SignUp/SignUp.js'
import Login from './components/Login/Login.js'
import Home from './components/HomePage/Home.js'
import { loginStatus } from './actions/usersActions.js'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.loginStatus()
  }

    render() {
      return (
        <Router >
          <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/signup' component={SignUp} />
              <Route exact path='/login'  component={Login}/>
            </Switch>
          <Footer />
        </Router> 
      );
    } 
}

export default connect(null, { loginStatus })(App);
