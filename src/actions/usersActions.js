import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:3000/api/v1'


export const loginStatus = () => {

  return (dispatch) = {
    axios.get(BASE_URL + '/logged_in')
    .then(response => {
      if (response.data.logged_in){
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api erros:', error))
  }
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