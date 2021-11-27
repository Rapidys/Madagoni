import {
  IncomingMessagesAC,
} from "../Reducers/sendDocumentReducer";
import API from "./ApiBase";
import {setDraftAC} from "../Reducers/DraftDocumentReducer";
import {setToTalPages} from "../Reducers/PaginationReducer";
import {chosenDocPageAC} from "../Reducers/chosenDocumentReducer";

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
          console.log(response)
          dispatch(IncomingMessagesAC(response.data.documentList))
          dispatch(setToTalPages(response.headers['content-length']))
        })

    } catch (e) {
      alert(e)
    }
  }
}
export let getDraftDocs = (documentStatus) => {
  return dispatch => {
    try {
      API.getDocuments(documentStatus)

        .then(response => {
          console.log(response)
          dispatch(setDraftAC(response.data.documentList))
          dispatch(setToTalPages(response.headers['content-length']))
        })

    } catch (e) {
      alert(e)
    }
  }
}
