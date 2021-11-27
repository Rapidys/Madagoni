import {connect} from "react-redux";
import Editor from "./Editor";
import { setNewObject,} from "../../../Reducers/addNewPost/addNewPostReducer";

let MapStateToProps = (state) => ({
  newPost: state.addNewPost.newPost,
  confirmations: state.addNewPost.confirmations,

})

let MapDispatchToProps = (dispatch) => {
  return {

    setNewPost: (newPost) => {
      dispatch(setNewObject(newPost))
    }

  }
}

let EditorContainer = connect(MapStateToProps, MapDispatchToProps)(Editor)

export default EditorContainer
