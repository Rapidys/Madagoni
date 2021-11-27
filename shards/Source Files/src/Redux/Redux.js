import {applyMiddleware, combineReducers, createStore} from "redux";
import sideBarReducer from "../Reducers/sideBarReducer";
import AuthReducer from "../Reducers/AuthReducer";
import thunk from "redux-thunk";
import IncomingMessagesReducer from "../Reducers/sendDocumentReducer";
import sideBarActionsReducer
  from "../Reducers/addNewPost/SideBarActionsReducer";
import {addNewPostReducer} from "../Reducers/addNewPost/addNewPostReducer";
import {setNewUser} from "../Reducers/registerReducer";
import treeDataReducer from "../Reducers/TreeDataReducer";
import setChosenData from "../Reducers/addNewPost/setDate";
import uploadImgReducer from "../Reducers/uploadImgReducer";
import DocumentMotionsReducer
  from "../Reducers/addNewPost/DocumentMotionsReducer";
import selectDocumentReducer from "../Reducers/addNewPost/selectDocReducer";
import uploadFileReducer from "../Reducers/addNewPost/UploadFileReducer";
import userInfoReducer from "../Reducers/userInfoReducer";
import DraftDocumentReducer from "../Reducers/DraftDocumentReducer";
import sentDocumentsReducer from "../Reducers/sendDocumentReducer";
import PaginationReducer from "../Reducers/PaginationReducer";
import chosenDocumentReducer from "../Reducers/chosenDocumentReducer";


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
  chosenData: setChosenData,
  uploadImg: uploadImgReducer,
  docMotion: DocumentMotionsReducer,
  selectDocument: selectDocumentReducer,
  uploadFile: uploadFileReducer,
  userInfo: userInfoReducer
})

let store = createStore(Reducers, applyMiddleware(thunk))


export default store
