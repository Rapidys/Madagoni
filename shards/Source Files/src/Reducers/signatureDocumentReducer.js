let initialState = {
  signatureDoc: [],  // visitorebis
}

let setSignature = 'setSignature'

let signatureDocumetReducer = (state = initialState, action) => {
  switch (action.type) {
    case setSignature: {
      return {
        ...state,
        signatureDoc: action.doc
      }
    }
    default:
      return state
  }
}
export let setSignatureAC = (doc) => ({type: setSignature, doc})

export default signatureDocumetReducer
