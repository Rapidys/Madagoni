import API from "../../API/ApiBase";

let initialState = {
  comments: []
}


let setComments = 'SET-COMMENTS'
let commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case setComments:
      return {
        ...state,
        comments: action.comments
      }
    default:
      return state
  }

}

export let setCommentsAC = (comments) => ({type: setComments, comments})


export let getComments = (documentId) => {
  return dispatch => {
    API.getCommentsapi(documentId).then((response) => {
      try {
        dispatch(setCommentsAC(response.data))
      } catch (e) {
        console.log(e)
      }
    })
  }
}
export default commentsReducer
