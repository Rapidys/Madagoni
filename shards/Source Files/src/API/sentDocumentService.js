import {
  sendDocumentAC,
} from "../Reducers/sendDocumentReducer";
import API from "./ApiBase";
import {setDraftAC} from "../Reducers/DraftDocumentReducer";
import {setToTalPages} from "../Reducers/PaginationReducer";
import {chosenDocPageAC} from "../Reducers/chosenDocumentReducer";
import {setSignatureAC} from "../Reducers/signatureDocumentReducer";
import {setIncomingDocsAC} from "../Reducers/IncomingDocumentsReducer";

export let getMessagePage = (params) => {
  return dispatch => {
    try {
      API.getDocument(params)
        .then(response => {
          debugger
          dispatch(chosenDocPageAC(response.data))
        })
    } catch (e) {
      console.log(e)
    }
  }
}
export let getOnPageChange = (documentStatus) => {


  return dispatch => {
    try {
      API.getDocuments(documentStatus)

        .then(response => {
          dispatch(sendDocumentAC(response.data.documentList))
          dispatch(setToTalPages(response.data.totalCount))
        })

    } catch (e) {
      console.log(e)
    }
  }
}
export let getDraftDocs = (documentStatus) => {
  return dispatch => {
    try {
      API.getDocuments(documentStatus)

        .then(response => {
          dispatch(setDraftAC(response.data.documentList))
          dispatch(setToTalPages(response.data.totalCount))
        })

    } catch (e) {
      console.log(e)
    }
  }
}
export let getSignatureDocs = (documentStatus) => {
  return dispatch => {
    try {
      API.getDocuments(documentStatus)

        .then(response => {
          dispatch(setSignatureAC(response.data.documentList))
          dispatch(setToTalPages(response.data.totalCount))
        })

    } catch (e) {
      console.log(e)

    }
  }
}
export let getIncomingDocs = (documentStatus) => {
  return dispatch => {
    try {
      API.getDocuments(documentStatus)

        .then(response => {

          console.log(response)
          dispatch(setIncomingDocsAC(response.data.documentList))
          dispatch(setToTalPages(response.data.totalCount))
        })

    } catch (e) {
      console.log(e)

    }
  }
}
