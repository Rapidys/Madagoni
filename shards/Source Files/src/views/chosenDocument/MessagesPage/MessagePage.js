import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom/cjs/react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getMessagePage} from "../../../API/sentDocumentService";
import AddNewPost from "../../../components/add-new-post/addNewPost";
import {setDocTypeAC} from "../../../Reducers/addNewPost/selectDocReducer";

const ChosenDocument = (props) => {


  let params = useParams()
  let pageId = params.id

  let dispatch = useDispatch()
  let chosen = useSelector(state => state.chosenDocument.currentMessagePage)


  useEffect(() => {
    debugger
    dispatch(getMessagePage(params.id))
  }, [pageId])
  const [documentTitle, setDocumentTitle] = useState(chosen.documentTitle)
  const [documentBody, setDocumentBody] = useState('')
  let [chosenVisitor, setChosenVisitor] = useState(chosen.documentMotions)
  let MotionStatus = useSelector(state => state.MotionStatus.motionStatus)
  let DocumentType = useSelector(state => state.selectDocument.type)


  return (
    <AddNewPost
      title={`დოკუმენტის ნომერი :${chosen.documentId} `}
      setDocumentTitle={setDocumentTitle}
      documentTitle={documentTitle}
      setDocumentBody={setDocumentBody}
      documentBody={documentBody}
      chosenVisitor={chosenVisitor}
      setChosenVisitor={setChosenVisitor}
      documentType={DocumentType}
      approve={MotionStatus === 3 ? 'ml-2' : 'd-none'}
    />
  );
};


export default ChosenDocument;
