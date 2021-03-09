import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:3001/api/v1'

const LOADING = { type: "LOADING" };

const loggedIn = (user) => {  
  return {
    type:"LOGGED_IN",
    user
  }
}

const logOut = () => {
  return {
    type:"LOG_OUT"
  }
}

export function loginStatus() {
  return async function(dispatch) {
    try {
      const response = await axios.get(BASE_URL + '/logged_in');
      if (response.data.logged_in == true) {
        dispatch(loggedIn(response.data));
      } else {
        dispatch(logOut());
      }
    } catch (error) {
      return console.log('api errors:', error);
    }
    }
  }

  export function createUserSession(user_data) {
    return async function(dispatch) {
      try {
        const response = await axios.post(BASE_URL + '/login' + { user_data });
          if (response.data.logged_in) {
            dispatch(loggedIn(response.data));
          } else {
            dispatch(logOut());
          }
      }
      catch (error) {
        return console.log('api errors:', error);
      }
    }
  } 


  export const handleLogIn = () => {
    return createUserSession.call()
  }

  export const handleSignUp = (user) => {
    return async function() {
      try {
        const response = await axios.post(BASE_URL + '/users', {user})
        if (response.data.status === 'created'){
          return async function(response) {
            createUserSession(response.data)
          }
        }
      }
      catch (error) {
        return console.log('api errors:', error);
      }
    }
  }










//   axios.post(BASE_URL +'/users', {user})
//   .then(response => {
//     if (response.data.status === 'created') {
//       debugger;
//       this.props.createUserSession(response.data)
//       this.redirect()
//     } else {
//       this.setState({
//         errors: response.data.errors
//       })
//     }
//   })
//   .catch(error => console.log('api errors:', error))
// };

// redirect = () => {
// this.setState({redirect: "/"});
// };
