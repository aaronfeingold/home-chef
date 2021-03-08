const initialState = {
  loading: true,
  isLoggedIn: false,
  user: {}
};

export default (state=initialState, action) => {
  switch(action.type){
    case "LOADING":
      return {...state, loading: true};
    case "LOAD_USER":
      return {...state, isLoggedIn: true, user: action.user }
  }
}