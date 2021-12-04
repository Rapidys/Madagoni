let initialState = {
  incomingDoc: [],
  finishDocument: false,
}

let setIncoming = 'setIncoming'
let setFinishDoc = 'FINISH-DOC'

let IncomingDocumentReducer = (state = initialState, action) => {
  switch (action.type) {
    case setIncoming: {
      return {
        ...state,
        incomingDoc: action.doc
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
export let setIncomingDocsAC = (doc) => ({type: setIncoming, doc})
export let setFinishDocAC = (setVisible) => ({type: setFinishDoc, setVisible})

export default IncomingDocumentReducer
