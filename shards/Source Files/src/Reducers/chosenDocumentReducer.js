let initialState = {
  currentMessagePage: {},
  uniqueId: null,
}

let chosenDocPage = 'chosenDocPage'


let chosenDocumentReducer = (state = initialState, action) => {
  switch (action.type) {

    case chosenDocPage: {
      return {
        ...state,
        currentMessagePage: action.info
      }
    }
    case 'uniqueId': {

      return {
        ...state,
        uniqueId: action.id
      }
    }

    default:
      return state
  }
}

export let chosenDocPageAC = (info) => ({type: chosenDocPage, info})
export let uniqueIdAC = (id) => ({type: 'uniqueId', id})


export default chosenDocumentReducer
