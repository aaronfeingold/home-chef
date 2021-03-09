import React, { Component }from 'react';
import { connect } from 'react-redux'
import Welcome from './Welcome.js'

class Home extends Component {

  render() {
    return(
      <div>
        <Welcome isLoggedIn={this.props.isLoggedIn}/>
      </div>
    )
  } 
  
}

const mapStateToProps = state => {
  return {
      isLoggedIn: state.usersReducer.isLoggedIn
  }
}

export default connect(mapStateToProps) (Home)
// export default Home