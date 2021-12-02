let initialState = {
  currentMessagePage: {},
  uniqueId: null,
  newDocs: [],
}

let chosenDocPage = 'chosenDocPage'
let uniqueId = 'uniqueId'
let setNewDocs = 'setNewDocs'


let chosenDocumentReducer = (state = initialState, action) => {
  switch (action.type) {

    case chosenDocPage: {
      return {
        ...state,
        currentMessagePage: action.info
      }
    }
    case uniqueId: {

      return {
        ...state,
        uniqueId: action.id
      }
    }
    case setNewDocs: {

      return {
        ...state,
        newDocs: [...state.newDocs, ...action.newd]
      }
    }


    default:
      return state
  }
}

export let chosenDocPageAC = (info) => ({type: chosenDocPage, info})
export let uniqueIdAC = (id) => ({type: uniqueId, id})
export let newDocs = (newd) => ({type: setNewDocs, newd})


export default chosenDocumentReducer
