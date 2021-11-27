let initialState = {
  sentDoc: [],

}

let sendDocs = 'SEND-DOCS'


let sentDocumentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case sendDocs: {
      return {
        ...state,
        sentDoc: action.doc
      }
    }

    default:
      return state
  }
}

export let IncomingMessagesAC = (doc) => ({type: sendDocs, doc})



export default sentDocumentsReducer
