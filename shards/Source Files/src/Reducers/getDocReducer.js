let initialState = {
  documents: [],
  finishDocument: false,
  approveBtn: false,
  addBtn: false,
  isLoading: false,

}

let setGetDoc = 'setGetDoc'
let setFinishDoc = 'FINISH-DOC'
let setDocLoading = 'setDocLoading'
let setApproveBtn = 'setApproveBtn'
let setAddBtn = 'setAddBtn'


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
    case setDocLoading: {
      return {
        ...state,
        isLoading: action.loading
      }
    }
    case setApproveBtn: {
      return {
        ...state,
        approveBtn: action.setVisible
      }
    }
    case setAddBtn: {
      return {
        ...state,
        addBtn: action.setVisible
      }
    }
    default:
      return state
  }
}

export let GetDocumentAC = (doc) => ({type: setGetDoc, doc})
export let setFinishDocAC = (setVisible) => ({type: setFinishDoc, setVisible})
export let setDocLoadingAC = (loading) => ({type: setDocLoading, loading})
export let approveBtnAC = (setVisible) => ({type: setApproveBtn, setVisible})
export let setAddBtnAC = (setVisible) => ({type: setAddBtn, setVisible})


export default GetDocReducer
