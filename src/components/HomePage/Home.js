import React, {Component} from 'react';


class Home extends Component {

  render(){
    let message

    if (this.props.isLoggedIn === true){
      message =  "You are logged in" 
    } else {
      message = "Please login"
    }

    return (
      <div className="container-fluid">
        <h3>Hello!</h3>
        <p>{message}</p>
      </div>
    );
  }
};
export default Home;