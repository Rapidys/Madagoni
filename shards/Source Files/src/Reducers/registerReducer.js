import API from "../API/ApiBase";

let initialState = {
  newUser: {},

}
let setUser = 'EMAIL'
let registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case setUser :
      return {
        ...state,
        newUser: action.user
      }
  }
}

export let setUserAC = (user) => ({type: setUser, user})


export let setNewUser = (values) => {
  let newPostObject = {
    departmentId: 0,
    parentId: 0,
    displayName: values && values.firstName,
    isActive: true,
    employes: []
  }
  return dispatch => {
    API.registerUser(newPostObject)
      .then(response => {
        dispatch(setUserAC(newPostObject))
      })
  }
}
export default registerReducer
