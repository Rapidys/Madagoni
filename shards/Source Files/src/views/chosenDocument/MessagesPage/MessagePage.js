import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom/cjs/react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getMessagePage} from "../../../API/sentDocumentService";
import AddNewPost from "../../../components/add-new-post/addNewPost";

const ChosenDocument = (props) => {


  let params = useParams()
  let pageId = params.id

  let dispatch = useDispatch()
  let chosen = useSelector(state => state.chosenDocument.currentMessagePage)


  useEffect(() => {
    dispatch(getMessagePage(params.id))
    setDocumentTitle(chosen.documentTitle)
    setDocumentBody(chosen.documentBody || '')

  }, [pageId, chosen])
  const [documentTitle, setDocumentTitle] = useState('')
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
      approve={MotionStatus === 3 ? 'lg-ml-2 xs-ml-0 border - 1' : 'd-none'}
    />
  );
};


export default ChosenDocument;
