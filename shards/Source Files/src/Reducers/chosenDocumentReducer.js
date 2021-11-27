let initialState = {
  currentMessagePage: {},

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

    default:
      return state
  }
}

export let chosenDocPageAC = (info) => ({type: chosenDocPage, info})


export default chosenDocumentReducer
