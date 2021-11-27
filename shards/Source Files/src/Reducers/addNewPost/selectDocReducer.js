import API from "../../API/ApiBase";

let initialState = {
  setOptions: null,
  selectType: {},
}

const selectValue = 'SELECT'
const setOptions = 'SET-SELECT'

let selectDocumentReducer = (state = initialState, action) => {
  switch (action.type) {
    case selectValue :
      return {
        ...state,
        selectType: action.data
      }
    case setOptions :
      return {
        ...state,
        setOptions: action.options
      }
    default:
      return state
  }
}

export let selectDocumentAC = (data) => ({type: selectValue, data})
export let setOptionsAC = (options) => ({type: setOptions, options})

export const getType = () => {
  return dispatch => {
    try {
      API.getDocTypes()
        .then(response => {
          dispatch(setOptionsAC(response.data))
        })

    } catch (e) {
      console.log(e.response.data);
      console.log(e.response.status)
    }
  }
}

export default selectDocumentReducer
