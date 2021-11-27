let initialState = {
  incomingDoc: [],

}

let setIncoming = 'setIncoming'

let IncomingDocumentReducer = (state = initialState, action) => {
  switch (action.type) {
    case setIncoming: {
      return {
        ...state,
        incomingDoc: action.doc
      }
    }
    default:
      return state
  }
}
export let setIncomingDocsAC = (doc) => ({type: setIncoming, doc})

export default IncomingDocumentReducer
