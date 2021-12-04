import {
  sendDocumentAC,
} from "../Reducers/sendDocumentReducer";
import API from "./ApiBase";
import {setDraftAC} from "../Reducers/DraftDocumentReducer";
import {setToTalPages} from "../Reducers/PaginationReducer";
import {chosenDocPageAC} from "../Reducers/chosenDocumentReducer";
import {setSignatureAC} from "../Reducers/signatureDocumentReducer";
import {setIncomingDocsAC} from "../Reducers/IncomingDocumentsReducer";
import {setIsAuth} from "../Reducers/AuthReducer";


export let getMessagePage = (params) => {
  return dispatch => {
    try {
      API.getDocument(params)
        .then(response => {
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

          if (!response.data) {
            return dispatch(setIsAuth(false))
          }
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
          if (!response.data) {
            return dispatch(setIsAuth(false))
          }
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
          if (!response.data) {
            return dispatch(setIsAuth(false))
          }
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
          if (!response.data) {
            return dispatch(setIsAuth(false))
          }
          dispatch(setIncomingDocsAC(response.data.documentList))
          dispatch(setToTalPages(response.data.totalCount))
        })

    } catch (e) {
      console.log(e)

    }
  }
}
