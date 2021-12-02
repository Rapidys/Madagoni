import {applyMiddleware, combineReducers, createStore} from "redux";
import sideBarReducer from "../Reducers/sideBarReducer";
import AuthReducer from "../Reducers/AuthReducer";
import thunk from "redux-thunk";
import {addNewPostReducer} from "../Reducers/addNewPost/addNewPostReducer";
import {setNewUser} from "../Reducers/registerReducer";
import treeDataReducer from "../Reducers/TreeDataReducer";
import DocumentMotionsReducer
  from "../Reducers/addNewPost/DocumentMotionsReducer";
import selectDocumentReducer from "../Reducers/addNewPost/selectDocReducer";
import uploadFileReducer from "../Reducers/addNewPost/UploadFileReducer";
import userInfoReducer from "../Reducers/userInfoReducer";
import DraftDocumentReducer from "../Reducers/DraftDocumentReducer";
import sentDocumentsReducer from "../Reducers/sendDocumentReducer";
import PaginationReducer from "../Reducers/PaginationReducer";
import chosenDocumentReducer from "../Reducers/chosenDocumentReducer";
import signatureDocumetReducer from "../Reducers/signatureDocumentReducer";
import IncomingDocumentReducer from "../Reducers/IncomingDocumentsReducer";
import MotionStatusReducer from "../Reducers/MotionStatusReducer";
import documentColorReducer from "../Reducers/setDocumentColorReducer";


let Reducers = combineReducers({
  sideBarNavigation: sideBarReducer,
  Auth: AuthReducer,
  sentDocuments: sentDocumentsReducer,
  setDrafts: DraftDocumentReducer,
  chosenDocument: chosenDocumentReducer,
  PaginationData: PaginationReducer,
  addNewPost: addNewPostReducer,
  Register: setNewUser,
  Tree: treeDataReducer,
  docMotion: DocumentMotionsReducer,
  selectDocument: selectDocumentReducer,
  uploadFile: uploadFileReducer,
  userInfo: userInfoReducer,
  signatureDocument: signatureDocumetReducer,
  IncomingDocument: IncomingDocumentReducer,
  MotionStatus: MotionStatusReducer,
  documentColor: documentColorReducer,
})

let store = createStore(Reducers, applyMiddleware(thunk))


export default store
