import API from "../API/ApiBase";

let initialState = {
  newUser: {},

}
let setUser = 'EMAIL'
let registerReducer = (state = initialState, action) => {
  debugger
  switch (action.type) {
    case setUser :
      return {
        ...state,
        newUser: action.user
      }
  }
}

export let setUserAC = (user) => ({type: setUser, user})


export let setNewUser = (user) => {
  return dispatch => {
    API.registerUser(user)
      .then(response => {
        dispatch(setUserAC(user))
      })
  }
}
export default registerReducer
