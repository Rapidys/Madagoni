let initialState = {
  DraftDoc: [],

}

let setDraft = 'SET-DRAFT'

let DraftDocumentReducer = (state = initialState, action) => {
  switch (action.type) {
    case setDraft: {
      return {
        ...state,
        DraftDoc: action.doc
      }
    }
    default:
      return state
  }
}
export let setDraftAC = (doc) => ({type: setDraft, doc})

export default DraftDocumentReducer
