let initialState = {
  documents: [],
  finishDocument: false,

}

let setGetDoc = 'setGetDoc'
let setFinishDoc = 'FINISH-DOC'


let GetDocReducer = (state = initialState, action) => {
  switch (action.type) {
    case setGetDoc: {
      return {
        ...state,
        documents: action.doc
      }
    }
    case setFinishDoc: {
      return {
        ...state,
        finishDocument: action.setVisible
      }
    }
    default:
      return state
  }
}

export let GetDocumentAC = (doc) => ({type: setGetDoc, doc})
export let setFinishDocAC = (setVisible) => ({type: setFinishDoc, setVisible})


export default GetDocReducer
