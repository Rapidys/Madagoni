import API from "../API/ApiBase";

let initialState = {
  isAuth: false,
  currentUser: {},
  email: '',
  password: '',
  isLoading:true,
}
const Loading = 'SETLOADING'
let AuthReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SET-AUTH': {
      return {
        ...state,
        isAuth: action.setAuth
      }
    }
    case 'SET-USER': {
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true
      }

    }

    case 'LogOut': {
      localStorage.removeItem('token')

      return {
        ...state,
        currentUser: {},
        isAuth: false,

      }
    }
    case Loading: {
      return {
        ...state,
        isLoading: action.loading
      }
    }
    default:
      return state
  }

}
export default AuthReducer

export let setIsAuth = (setAuth) => ({type: 'SET-AUTH', setAuth})
export let Logout = () => ({type: 'LogOut'})
export let setUser = (user) => ({type: "SET-USER", payload: user})
export let LoadingAC = (loading) => ({type: Loading, loading})


export const login = (email, password) => {

  return (dispatch) => {
    try {

      API.AuthAPI(email, password)

        .then(response => {
          dispatch(setUser({email, password}))
          if (response.data.success === true) {
            dispatch(setIsAuth(true))

          }
          localStorage.setItem('token', response.data.token)

        })

    } catch (e) {
      console.log(e)
    }
  }
}
