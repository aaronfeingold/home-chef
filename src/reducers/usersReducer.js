const initialState = {
  loading: true,
  isLoggedIn: false,
  user: {}
};

export default (state=initialState, action) => {
  switch(action.type){
    case "LOADING":
      return {...state, loading: true};
    case "LOGGED_IN":
      return {...state, isLoggedIn: true, loading: false, user: action.user };
    case "LOG_OUT":
      return {...state, isLoggedIn: false, user: {}, loading: false};
    default:
      return state;
  }
}