import React, {useEffect, useMemo, useState} from 'react';
import {useParams} from "react-router-dom/cjs/react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getMessagePage} from "../../../API/sentDocumentService";
import AddNewPost from "../../../components/add-new-post/addNewPost";

const ChosenDocument = () => {


  let params = useParams()
  let pageId = params.id

  let dispatch = useDispatch()
  let chosen = useSelector(state => state.chosenDocument.currentMessagePage)
  const [documentTitle, setDocumentTitle] = useState('')
  const [documentBody, setDocumentBody] = useState('')
  let [chosenVisitor, setChosenVisitor] = useState([])

  useEffect(() => {
    dispatch(getMessagePage(pageId))
  }, [pageId])


  useMemo(() => {

    setDocumentTitle(chosen.documentTitle || '')
    setDocumentBody(chosen.documentBody || '')
    {
      chosen.documentMotions && chosen.documentMotions.forEach((item, i) => {

        if (item.motionTypeId === 2) return chosenVisitor[i] = item;

      })
    }
  }, [chosen])


  let MotionStatus = useSelector(state => state.MotionStatus.motionStatus)
  let DocumentType = useSelector(state => state.selectDocument.type)

  console.log(chosenVisitor)
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
      approve={MotionStatus === 3 ? 'lg-ml-3 xs-ml-0 border - 1' : 'd-none'}
    />
  );
};


export default ChosenDocument;
