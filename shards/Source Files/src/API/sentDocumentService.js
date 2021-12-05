import {
  GetDocumentAC,
} from "../Reducers/getDocReducer";
import API from "./ApiBase";
import {setToTalPages} from "../Reducers/PaginationReducer";
import {chosenDocPageAC} from "../Reducers/chosenDocumentReducer";
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
export let getDocs = (documentStatus) => {


  return dispatch => {
    try {
      API.getDocuments(documentStatus)
        .then(response => {
          if (!response.data) {
            return dispatch(setIsAuth(false))
          }
          dispatch(GetDocumentAC(response.data.documentList))
          dispatch(setToTalPages(response.data.totalCount))
        })

    } catch (e) {
      console.log(e)
    }
  }
}
